import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContextMenuComponent } from './features/context-menu/context-menu.component';
import { DraggableWindowComponent } from "./features/draggable-window/draggable-window.component";
import { DesktopComponent } from "./features/desktop/desktop.component";
import { TaskbarComponent } from "./features/taskbar/taskbar.component";
import { WindowManagerService } from './core/services/window-manager.service';
import { NgFor } from '@angular/common';


export interface App {
  id: number;
  title: string;
  simbol: string;
  bgColor: string;
  windowId?: number;
}


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, NgFor, ContextMenuComponent, DraggableWindowComponent, DesktopComponent, TaskbarComponent,],
    providers: [WindowManagerService]
})
export class AppComponent {
  title = 'resume-v2';
  activeWindowId!: number;

  @ViewChild('contextMenu') contextMenu!: ContextMenuComponent;

  constructor(private windowManager: WindowManagerService) {}

  onRightClick(event: MouseEvent) {
    this.contextMenu.showMenu(event);
    return false;  // Impede o menu de contexto padrão
  }

  openApps: App[] = [];

  // onAppClick(app: App) {
  //   if (!this.openApps.find(openApp => openApp.id === app.id)) {
  //     this.openApps.push(app);
  //   }
  // }

  onAppClick(app: App) {
    if (!this.openApps.find(openApp => openApp.id === app.id)) {
      this.openApps.push(app);
    }
    this.windowManager.openWindow(app, `<p>Conteúdo para o ${app.title}</p>`);
  }

  get openWindows() {
    return this.windowManager.getWindows();
  }

  onWindowClick(windowId: number) {
    
    this.windowManager.activateWindow(windowId);
  }

  onWindowClose(windowId: number) {
    this.windowManager.closeWindow(windowId);
  }

  onWindowMinimize(windowId: number) {
    this.windowManager.minimizeWindow(windowId);
  }

  onWindowExpand(windowId: number) {
    this.windowManager.expandWindow(windowId);
  }

  openWindowTaskBar(){
    this.windowManager.activateWindow(this.activeWindowId);
  }
}
