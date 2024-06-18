import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills-item-detail',
  standalone: true,
  imports: [],
  templateUrl: './skills-item-detail.component.html',
  styleUrl: './skills-item-detail.component.scss'
})
export class SkillsItemDetailComponent {
  @Input() selectedSkill!: any;
}
