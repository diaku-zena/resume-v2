import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { apps } from '../../shared/data/apps.data';
import { NgClass } from '@angular/common';
import { DraggableService } from '../../core/services/draggable.service';
import { WindowService } from '../../core/services/window.service';
import {CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { App } from '../../core/interfaces/app.interface';

@Component({
  selector: 'app-desktop',
  standalone: true,
  imports: [NgClass, DragDropModule],
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

  selectedApp: App | null = null;
  onAppClick(app: App) {
    this.appClick.emit(app);
  }

  selectApp(draggableApp: HTMLElement, app: App){
    this.selectedApp = app;
    draggableApp.classList.add("selected");
  }

  isSelected(app: App) {
    return this.selectedApp && this.selectedApp.id === app.id;
  }

  constructor(private windowService: WindowService,) {
    this.windowRef = this.windowService.windowRef;
  }

  drop(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
