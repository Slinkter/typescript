// Contrato para cualquier elemento que se pueda ARRASTRAR (Tarjetas Item)
export interface Draggable {
    dragStartHandler(event: DragEvent): void;
    dragEndHandler(event: DragEvent): void;
}

// Contrato para cualquier contenedor donde se pueda SOLTAR (Columnas List)
export interface DragTarget {
    dragOverHandler(event: DragEvent): void;
    dropHandler(event: DragEvent): void;
    dragLeaveHandler(event: DragEvent): void;
}
