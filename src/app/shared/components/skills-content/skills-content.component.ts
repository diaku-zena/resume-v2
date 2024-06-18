import { Component, Input, TemplateRef, ViewChild, input } from '@angular/core';
import { SkillsList } from '../skills/skills.component';

@Component({
  selector: 'app-skills-content',
  standalone: true,
  imports: [],
  templateUrl: './skills-content.component.html',
  styleUrl: './skills-content.component.scss'
})
export class SkillsContentComponent {
  @Input() skillsList!: any;
 
}
