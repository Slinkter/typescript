// Enum para que el estado de un proyecto solo pueda ser Active (0) o Finished (1)
export enum ProjectStatus {
    Active,
    Finished
}

// Clase que representa los datos de un proyecto individual
export class Project {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public people: number,
        public status: ProjectStatus
    ) {}
}
