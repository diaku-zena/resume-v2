import { Component, EventEmitter, Input, Output } from '@angular/core';
import { App } from '../../app.component';
import { NgClass } from '@angular/common';
import { WindowManagerService } from '../../core/services/window-manager.service';

@Component({
  selector: 'app-taskbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './taskbar.component.html',
  styleUrl: './taskbar.component.scss'
})
export class TaskbarComponent {
  @Input() openApps: App[] = [];
  @Output() openAppTaskbar = new EventEmitter<App>();
  
  openApp(app: App){
    this.openAppTaskbar.emit(app);
  }

  constructor(private windowManager: WindowManagerService) { }

  get openWindows() {
    return this.windowManager.getWindows();
  }

  activateWindow(windowId: number) {
    const window = this.openWindows.find(window => window.id === windowId);
    if(window){
      if(!window.isActive && !window.isMinimized){
        this.windowManager.activateWindow(windowId);
      } else {
        window.isMinimized = !window.isMinimized;
        if(!window.isMinimized){
          this.windowManager.activateWindow(windowId);
        }

      }
    }
    
  }
}
