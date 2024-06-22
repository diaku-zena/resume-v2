import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild, input } from '@angular/core';
import { SkillsList } from '../skills/skills.component';
import { App } from '../../../core/interfaces/app.interface';

@Component({
  selector: 'app-skills-content',
  standalone: true,
  imports: [],
  templateUrl: './skills-content.component.html',
  styleUrl: './skills-content.component.scss'
})
export class SkillsContentComponent {
  @Input() skillsList!: any;
 @Output() selectedItem = new EventEmitter<App>();


}
