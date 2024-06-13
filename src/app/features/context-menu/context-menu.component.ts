import { NgIf, NgStyle } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-context-menu',
  standalone: true,
  imports: [NgIf, NgStyle],
  templateUrl: './context-menu.component.html',
  styleUrl: './context-menu.component.scss'
})
export class ContextMenuComponent {
  @Input() isVisible: boolean = false;
  position = { x: 0, y: 0 };

  @HostListener('document:click')
  onDocumentClick() {
    this.isVisible = false;
  }

  showMenu(event: MouseEvent) {
    event.preventDefault();
    this.position.x = event.clientX;
    this.position.y = event.clientY;
    this.isVisible = true;
  }

  onOptionSelected(option: string) {
    alert(`Selecionou: ${option}`);
    this.isVisible = false;
  }
}
