// ============================================================================
// BLOQUE 1: INTERFACES (Contratos de Drag & Drop) y MODELO DE DATOS (Project)
// ============================================================================

// Contrato para cualquier elemento que se pueda ARRASTRAR (Tarjetas Item)
interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}

// Contrato para cualquier contenedor donde se pueda SOLTAR (Columnas List)
interface DragTarget {
  dragOverHandler(event: DragEvent): void;
  dropHandler(event: DragEvent): void;
  dragLeaveHandler(event: DragEvent): void;
}

// Enum para que el estado de un proyecto solo pueda ser Active (0) o Finished (1)
enum ProjectStatus {
  Active,
  Finished,
}

// Clase que representa los datos de un proyecto individual
class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus,
  ) {}
}

// ============================================================================
// BLOQUE 2: GESTIÓN DE ESTADO + PATRÓN SINGLETON (ListenerState y State)
// ============================================================================

// Tipo para las funciones suscriptoras (listeners) que se ejecutan cuando cambia el estado
type Listener<T> = (items: T[]) => void;

class ListenerState<T> {
  protected listeners: Listener<T>[] = [];

  addListener(x: Listener<T>) {
    this.listeners.push(x);
  }
}

class State extends ListenerState<Project> {
  private projects: Project[] = [];

  // --- INICIO PATRÓN SINGLETON ---
  private static instance: State;

  // Constructor privado: impide hacer "new State()" desde fuera
  private constructor() {
    super();
  }

  // Único punto de acceso: devuelve siempre la misma instancia
  static getInstance() {
    if (this.instance) return this.instance;
    this.instance = new State();
    return this.instance;
  }
  // --- FIN PATRÓN SINGLETON ---

  // Agregar un nuevo proyecto (nace en estado Active)
  addProject(title: string, desc: string, nums: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      desc,
      nums,
      ProjectStatus.Active,
    );
    this.projects.push(newProject);
    this.updateListeners();
  }

  // Mover un proyecto de columna al soltarlo (Drag & Drop)
  moveProject(projectId: string, newStatus: ProjectStatus) {
    const project = this.projects.find((prj) => prj.id === projectId);
    if (project && project.status !== newStatus) {
      project.status = newStatus;
      this.updateListeners();
    }
  }

  // Avisar a todas las listas suscritas que los proyectos cambiaron
  private updateListeners() {
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice());
    }
  }
}

// Instancia global única del estado
const prjState = State.getInstance();

// ============================================================================
// BLOQUE 3: CLASE BASE ABSTRACTA (Component<T, U>)
// Clona cualquier <template> del HTML y lo inserta dentro del contenedor destino
// ============================================================================

abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateElem: HTMLTemplateElement;
  renderElem: T;
  element: U;

  constructor(
    templateId: string,
    renderElemId: string,
    insertAtStart: boolean,
    newElemId?: string,
  ) {
    this.templateElem = document.getElementById(
      templateId,
    )! as HTMLTemplateElement;
    this.renderElem = document.getElementById(renderElemId)! as T;

    const importedNode = document.importNode(this.templateElem.content, true);
    this.element = importedNode.firstElementChild as U;

    if (newElemId) {
      this.element.id = newElemId;
    }

    this.attach(insertAtStart);
  }

  private attach(insert: boolean) {
    this.renderElem.insertAdjacentElement(
      insert ? "afterbegin" : "beforeend",
      this.element,
    );
  }

  abstract configure(): void;
  abstract contentRender(): void;
}

// ============================================================================
// BLOQUE 4: CLASES VISUALES (Item, List, Input)
// ============================================================================

// 4.1. Clase Item: Representa cada tarjeta <li> arrastrable
class Item
  extends Component<HTMLUListElement, HTMLLIElement>
  implements Draggable
{
  private project: Project;

  get persons() {
    return this.project.people === 1
      ? "1 person"
      : `${this.project.people} persons`;
  }

  constructor(hostId: string, project: Project) {
    super("single", hostId, false, project.id);
    this.project = project;
    this.configure();
    this.contentRender();
  }

  dragStartHandler = (event: DragEvent) => {
    event.dataTransfer!.setData("text/plain", this.project.id);
    event.dataTransfer!.effectAllowed = "move";
  };

  dragEndHandler = (_: DragEvent) => {
    console.log("DragEnd");
  };

  configure() {
    this.element.addEventListener("dragstart", this.dragStartHandler);
    this.element.addEventListener("dragend", this.dragEndHandler);
  }

  contentRender() {
    this.element.querySelector("h2")!.innerText = this.project.title;
    this.element.querySelector("h3")!.innerText = this.persons + " assigned";
    this.element.querySelector("p")!.innerText = this.project.description;
  }
}

// 4.2. Clase List: Representa cada columna ('active' o 'finished') donde sueltas tarjetas
class List
  extends Component<HTMLDivElement, HTMLElement>
  implements DragTarget
{
  assignedProjects: Project[];

  constructor(private type: "active" | "finished") {
    super("list", "app", false, `${type}-projects`);
    this.assignedProjects = [];
    this.configure();
    this.contentRender();
  }

  dragOverHandler = (event: DragEvent) => {
    if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
      event.preventDefault();
      const listEl = this.element.querySelector("ul")!;
      listEl.classList.add("droppable");
    }
  };

  dropHandler = (event: DragEvent) => {
    const prjId = event.dataTransfer!.getData("text/plain");
    prjState.moveProject(
      prjId,
      this.type === "active" ? ProjectStatus.Active : ProjectStatus.Finished,
    );
    const listEl = this.element.querySelector("ul")!;
    listEl.classList.remove("droppable");
  };

  dragLeaveHandler = (_: DragEvent) => {
    const listEl = this.element.querySelector("ul")!;
    listEl.classList.remove("droppable");
  };

  configure() {
    this.element.addEventListener("dragover", this.dragOverHandler);
    this.element.addEventListener("dragleave", this.dragLeaveHandler);
    this.element.addEventListener("drop", this.dropHandler);

    prjState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter((prj) =>
        this.type === "active"
          ? prj.status === ProjectStatus.Active
          : prj.status === ProjectStatus.Finished,
      );
      this.assignedProjects = relevantProjects;
      this.projectsRender();
    });
  }

  contentRender() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector("h2")!.innerText =
      `${this.type.toUpperCase()} PROJECTS`;
  }

  private projectsRender() {
    const listEl = document.getElementById(
      `${this.type}-projects-list`,
    )! as HTMLUListElement;
    listEl.innerHTML = "";
    for (const prjItem of this.assignedProjects) {
      new Item(this.element.querySelector("ul")!.id, prjItem);
    }
  }
}

// 4.3. Clase Input: Representa el formulario superior para crear proyectos
class Input extends Component<HTMLDivElement, HTMLFormElement> {
  titleElem: HTMLInputElement;
  descElem: HTMLInputElement;
  peopleElem: HTMLInputElement;

  constructor() {
    super("project", "app", true, "user-input");
    this.titleElem = <HTMLInputElement>this.element.querySelector("#title");
    this.descElem = <HTMLInputElement>(
      this.element.querySelector("#description")
    );
    this.peopleElem = <HTMLInputElement>this.element.querySelector("#people");
    this.configure();
  }

  configure() {
    this.element.addEventListener("submit", (e) => {
      e.preventDefault();
      const userInput: [string, string, number] = [
        this.titleElem.value,
        this.descElem.value,
        +this.peopleElem.value,
      ];
      const [title, desc, people] = userInput;
      if (
        title.trim().length === 0 ||
        desc.trim().length === 0 ||
        people <= 0
      ) {
        alert("Please enter valid title, description, and people (> 0).");
        return;
      }
      prjState.addProject(title, desc, people);
      this.titleElem.value = "";
      this.descElem.value = "";
      this.peopleElem.value = "";
    });
  }

  contentRender() {}
}

// ============================================================================
// ARRANQUE DE LA APLICACIÓN (+ Proyectos de ejemplo precargados para probar ya)
// ============================================================================
const projInput = new Input();
const activeList = new List("active");
const finishedList = new List("finished");

// Agregamos 2 proyectos de muestra igual a la Figura 8-11 del libro para que
// puedas probar el Drag & Drop apenas abras el archivo index.html:
prjState.addProject("NodeJS APIs", "This is NodeJS project", 1);
prjState.addProject(
  "TypeScript Drag & Drop",
  "Arrastra esta tarjeta hacia FINISHED PROJECTS abajo",
  3,
);
