import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DraggableService {
  private draggedElement: HTMLElement | null = null;
  private offsetX = 0;
  private offsetY = 0;

  constructor() { }

  registerDraggable(element: HTMLElement) {
    element.addEventListener('mousedown', (event: MouseEvent) => this.startDrag(event, element));
  }

  private startDrag(event: MouseEvent, element: HTMLElement) {
    this.draggedElement = element;
    this.offsetX = event.clientX - this.draggedElement.offsetLeft;
    this.offsetY = event.clientY - this.draggedElement.offsetTop;

    document.addEventListener('mousemove', this.dragElement);
    document.addEventListener('mouseup', this.stopDrag);
  }

  private dragElement = (event: MouseEvent) => {
    if (this.draggedElement) {
      event.preventDefault();
      const x = event.clientX - this.offsetX;
      const y = event.clientY - this.offsetY;
      this.draggedElement.style.left = x + 'px';
      this.draggedElement.style.top = y + 'px';
    }
  }

  private stopDrag = () => {
    if (this.draggedElement) {
      document.removeEventListener('mousemove', this.dragElement);
      document.removeEventListener('mouseup', this.stopDrag);
      this.draggedElement = null;
    }
  }
}
