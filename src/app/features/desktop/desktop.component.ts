import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { apps } from '../../shared/apps.data';
import { NgClass } from '@angular/common';
import { App } from '../../app.component';
import { DraggableService } from '../../core/services/draggable.service';
import { WindowService } from '../../core/services/window.service';

@Component({
  selector: 'app-desktop',
  standalone: true,
  imports: [NgClass],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.scss'
})
export class DesktopComponent {
  appsList = apps;
  @Output() appClick = new EventEmitter<App>();
  @ViewChild('draggableApp') draggableApp!: ElementRef;

  isDragging = false;
  offsetX = 0;
  offsetY = 0;
  windowRef: Window | null;

  onAppClick(app: App) {
    this.appClick.emit(app);
  }

  constructor(private windowService: WindowService,) {
    this.windowRef = this.windowService.windowRef;
  }

  // onMouseDown(event: MouseEvent) {
  //   // this.bringToFront();
  //   this.isDragging = true;
  //   // Calcula o deslocamento (offset) inicial em relação à posição da janela
  //   this.offsetX = event.clientX - this.draggableApp.nativeElement.getBoundingClientRect().left;
  //   this.offsetY = event.clientY - this.draggableApp.nativeElement.getBoundingClientRect().top;
  //   event.preventDefault(); // Impede a seleção de texto ou outros comportamentos padrão
  // }

  // @HostListener('document:mousemove', ['$event'])
  // onMouseMove(event: MouseEvent) {
  //   if (this.isDragging) {
  //     // Calcula a nova posição da janela
  //     this.draggableApp.nativeElement.style.transform = `translateX(${event.clientY - this.offsetY}px)`;
  //     this.draggableApp.nativeElement.style.transform = `translateY(${event.clientX - this.offsetX}px)`;
  //   }
  // }

  // @HostListener('document:mouseup')
  // onMouseUp() {
  //   this.isDragging = false;
  // }
}
