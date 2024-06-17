import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { WindowService } from '../../core/services/window.service';
import { NgClass, NgIf } from '@angular/common';
import { DraggableService } from '../../core/services/draggable.service';
import { WindowData } from '../../core/services/window-manager.service';
import { AboutMeComponent } from '../../shared/components/about-me/about-me.component';
import { SkillsComponent } from "../../shared/components/skills/skills.component";
import { ExperienceComponent } from "../../shared/components/experience/experience.component";
import { ProjectsComponent } from "../../shared/components/projects/projects.component";


@Component({
    selector: 'app-draggable-window',
    standalone: true,
    templateUrl: './draggable-window.component.html',
    styleUrl: './draggable-window.component.scss',
    imports: [NgClass, NgIf, AboutMeComponent, SkillsComponent, ExperienceComponent, ProjectsComponent]
})
export class DraggableWindowComponent implements AfterViewInit{
  @Input() windowData!: WindowData;
  @Output() windowClick = new EventEmitter<number>();
  @Output() windowClose = new EventEmitter<number>();
  @Output() windowMinimize = new EventEmitter<number>();
  @Output() windowExpand = new EventEmitter<number>();
  @ViewChild('draggableWindow') draggableWindow!: ElementRef;
  
  isDragging = false;
  offsetX = 0;
  offsetY = 0;
  windowRef: Window | null;

  get contentComponent() {
    // Determina qual componente de conteúdo usar com base no tipo de conteúdo
    // Pode ser expandido para lidar com mais tipos de conteúdo
    if (typeof this.windowData.content === 'string') {
      return AboutMeComponent; // Exemplo com componente de parágrafo
    }
    // Adicione outras lógicas aqui para mais tipos de conteúdo

    return null;
  }


  @ViewChild('dynamicContent', { read: ViewContainerRef }) dynamicContent!: ViewContainerRef;
  
  constructor(private windowService: WindowService, private elementRef: ElementRef, private draggableService: DraggableService) {
    this.windowRef = this.windowService.windowRef;
  }

  ngAfterViewInit() {
    if (this.windowRef) {
      this.centerWindow();
    }

  }

  private bringToFront() {
    const element = this.elementRef.nativeElement;
    element.style.zIndex = this.windowData.zIndex;
  }

  onClose() {
    this.windowClose.emit(this.windowData.id);
  }

  onMinimize() {
    this.windowMinimize.emit(this.windowData.id);
  }

  onExpand() {
    this.windowExpand.emit(this.windowData.id);
  }

  centerWindow() {
    if (this.windowRef) {
      const windowElement = this.draggableWindow.nativeElement;
      const windowWidth = windowElement.offsetWidth;
      const windowHeight = windowElement.offsetHeight;
      const viewportWidth = this.windowRef.innerWidth;
      const viewportHeight = this.windowRef.innerHeight;

      const top = (viewportHeight - windowHeight) / 2;
      const left = (viewportWidth - windowWidth) / 2;

      windowElement.style.top = `${top}px`;
      windowElement.style.left = `${left}px`;
    }
  }

  onMouseDown(event: MouseEvent) {
    this.bringToFront();
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

  onClick() {
    this.windowClick.emit(this.windowData.id);
  }

}
