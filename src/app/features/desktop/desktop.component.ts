import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { apps } from '../../shared/data/apps.data';
import { NgClass } from '@angular/common';
import { DraggableService } from '../../core/services/draggable.service';
import { WindowService } from '../../core/services/window.service';
import {CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { App } from '../../core/interfaces/app.interface';
import { FeedbacksComponent } from "../feedbacks/feedbacks.component";
import { BrowserModule } from '@angular/platform-browser';
import { StorageService } from '../../core/services/storage.service';

@Component({
    selector: 'app-desktop',
    standalone: true,
    templateUrl: './desktop.component.html',
    styleUrl: './desktop.component.scss',
    imports: [NgClass, DragDropModule, FeedbacksComponent]
})
export class DesktopComponent {
  appsList = apps;
  @Output() appClick = new EventEmitter<App>();
  @ViewChild('draggableApp') draggableApp!: ElementRef;

  isDragging = false;
  offsetX = 0;
  offsetY = 0;
  windowRef: Window | null;

  showFeedbacks = false;

  selectedApp: App | null = null;

  constructor(private windowService: WindowService, private storageService: StorageService,) {
    this.windowRef = this.windowService.windowRef;
  }
  ngOnInit() {
    // if(!this.storageService.getWelcomeWD()) {
    //   this.storageService.setWelcomeWD(true);
    // }
  }

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

  showFeedbacksFn() {
    this.showFeedbacks = !this.showFeedbacks;
  }
}
