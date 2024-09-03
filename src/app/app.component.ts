import { afterNextRender, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContextMenuComponent } from './features/context-menu/context-menu.component';
import { DraggableWindowComponent } from "./features/draggable-window/draggable-window.component";
import { DesktopComponent } from "./features/desktop/desktop.component";
import { TaskbarComponent } from "./features/taskbar/taskbar.component";
import { WindowManagerService } from './core/services/window-manager.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RightToolsComponent } from "./shared/components/right-tools/right-tools.component";
import { App } from './core/interfaces/app.interface';
import { MoreoptionsComponent } from "./shared/components/moreoptions/moreoptions.component";
import { StorageService } from './core/services/storage.service';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [WindowManagerService],
  imports: [RouterOutlet, NgFor, NgIf, NgClass, ContextMenuComponent, DraggableWindowComponent, DesktopComponent, TaskbarComponent, RightToolsComponent, MoreoptionsComponent]
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'resume-v2';
  activeWindowId!: number;
  toggleMoreOptions = false;
  showBeWelcome = false;

  @ViewChild('contextMenu') contextMenu!: ContextMenuComponent;

  constructor(private windowManager: WindowManagerService, private storageService: StorageService) {
    afterNextRender(() => {
      if (!this.storageService.getWelcomeWD()) {
        this.showBeWelcome = true;
        this.storageService.setWelcomeWD(true);
      } else {
        this.showBeWelcome = false;
      }

    });

  }
  ngAfterViewInit(): void {

  }
  ngOnInit(): void {
    if (this.storageService.getWelcomeWD()) {
      // this.showBeWelcome = false;
    }
  }

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

  toggleShowBW() {
    this.showBeWelcome = !this.showBeWelcome;
  }


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

  openWindowTaskBar() {
    this.windowManager.activateWindow(this.activeWindowId);
  }

  toggleShowMoreOptions() {
    this.toggleMoreOptions = !this.toggleMoreOptions;
  }
}
