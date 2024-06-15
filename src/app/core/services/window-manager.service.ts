import { Injectable } from '@angular/core';
import { App } from '../../app.component';

interface WindowData {
  id: number;
  title: string;
  simbol: string;
  bgColor: string;
  content: string;
  isActive: boolean;
  zIndex: number;
  isMinimized: boolean;
  isExpanded: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class WindowManagerService {
  private windows: WindowData[] = [];
  private nextId = 0;
  private baseZIndex = 100;

  openWindow(app: App, content: string) {
    const existingWindow = this.windows.find(window => window.content === content);
    if (existingWindow) {
      // Se a janela já existe, ativa ela novamente
      this.activateWindow(existingWindow.id);
      return null;
    }

    this.deactivateAllWindows();
    const newWindow: WindowData = {
      id: this.nextId++,
      title: app.title,
      bgColor: app.bgColor,
      simbol: app.simbol,
      content,
      isActive: true,
      zIndex: this.baseZIndex + this.windows.length,
      isMinimized: false,
      isExpanded: false
    };
    this.windows.push(newWindow);
    return newWindow;
  }

  closeWindow(windowId: number) {
    this.windows = this.windows.filter(window => window.id !== windowId);
  }

  minimizeWindow(windowId: number) {
    const window = this.windows.find(window => window.id === windowId);
    if (window) {
      window.isActive = false;
      window.isMinimized = true;
    }
  }

  expandWindow(windowId: number) {
    const window = this.windows.find(window => window.id === windowId);
    if (window) {
      window.isExpanded = !window.isExpanded;
    }
  }

  activateWindow(windowId: number) {
    this.deactivateAllWindows();
    const window = this.windows.find(window => window.id === windowId);
    if (window) {
      
      window.isActive = true;
      window.zIndex = this.baseZIndex + this.windows.length;
    }
  }

  getWindows() {
    return this.windows;
  }

  private deactivateAllWindows() {
    this.windows.forEach(window => window.isActive = false);
  }
}
