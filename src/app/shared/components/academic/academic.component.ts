import { Component, computed, signal } from '@angular/core';
import { Skill } from '../../../core/interfaces/skill.interface';
import { SkillsData } from '../../data/skillsData';
import { SkillsList } from '../skills/skills.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-academic',
  standalone: true,
  imports: [NgClass],
  templateUrl: './academic.component.html',
  styleUrl: './academic.component.scss'
})
export class AcademicComponent {
  skillsListAll: SkillsList = SkillsData;

  skillsList!: Skill[];

  varControl = signal("lps");
  selectedMenuTitle = computed(()=> this.varControl());
  selectedSkill!: Skill;
  showDetail = false;
  isMenuVisible: boolean = false;

  constructor() {
    this.skillsList = this.skillsListAll[this.varControl()];
  }

  selectElement(value: any) {
    this.showDetail = false;
    this.toggleMenu();
    this.varControl.set(value);
    this.skillsList = this.skillsListAll[value];
    
  }

  showDetailFn(item: any) {
    this.selectedSkill = item;
    this.toggleGoBackToList();
  }

  toggleGoBackToList() {
    this.showDetail = !this.showDetail;
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
