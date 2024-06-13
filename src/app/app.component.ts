import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContextMenuComponent } from './features/context-menu/context-menu.component';
import { DraggableWindowComponent } from "./features/draggable-window/draggable-window.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ContextMenuComponent, DraggableWindowComponent]
})
export class AppComponent {
  title = 'resume-v2';

  @ViewChild('contextMenu') contextMenu!: ContextMenuComponent;

  onRightClick(event: MouseEvent) {
    this.contextMenu.showMenu(event);
    return false;  // Impede o menu de contexto padrão
  }
}
