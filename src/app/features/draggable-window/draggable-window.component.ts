import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-draggable-window',
  standalone: true,
  imports: [],
  templateUrl: './draggable-window.component.html',
  styleUrl: './draggable-window.component.scss'
})
export class DraggableWindowComponent implements AfterViewInit {
  @ViewChild('draggableWindow') draggableWindow!: ElementRef;

  isDragging = false;
  offsetX = 0;
  offsetY = 0;

  ngAfterViewInit() {
    // Inicializa a posição da janela, se necessário
    // this.draggableWindow.nativeElement.style.top = '100px';
    // this.draggableWindow.nativeElement.style.left = '100px';
    this.centerWindow();
  }

  centerWindow() {
    const windowElement = this.draggableWindow.nativeElement;
    const windowWidth = windowElement.offsetWidth;
    const windowHeight = windowElement.offsetHeight;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const top = (viewportHeight - windowHeight) / 2;
    const left = (viewportWidth - windowWidth) / 2;

    windowElement.style.top = `${top}px`;
    windowElement.style.left = `${left}px`;
  }

  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    // Calcula o deslocamento (offset) inicial em relação à posição da janela
    this.offsetX = event.clientX - this.draggableWindow.nativeElement.getBoundingClientRect().left;
    this.offsetY = event.clientY - this.draggableWindow.nativeElement.getBoundingClientRect().top;
    event.preventDefault(); // Impede a seleção de texto ou outros comportamentos padrão
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      // Calcula a nova posição da janela
      this.draggableWindow.nativeElement.style.top = `${event.clientY - this.offsetY}px`;
      this.draggableWindow.nativeElement.style.left = `${event.clientX - this.offsetX}px`;
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.isDragging = false;
  }

}
