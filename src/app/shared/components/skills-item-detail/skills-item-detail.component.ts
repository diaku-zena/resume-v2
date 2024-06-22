import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Skill } from '../../../core/interfaces/skill.interface';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-skills-item-detail',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './skills-item-detail.component.html',
  styleUrl: './skills-item-detail.component.scss'
})
export class SkillsItemDetailComponent {
  @Input() selectedSkill!: Skill | null;
  @Input() showDetail: boolean = false;
  @Output() backToList = new EventEmitter();

  
}
