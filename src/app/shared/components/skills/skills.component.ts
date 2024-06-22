import { Component, ViewChild, computed, signal } from '@angular/core';
import { SkillsContentComponent } from "../skills-content/skills-content.component";
import { NgClass } from '@angular/common';
import { SkillsItemDetailComponent } from "../skills-item-detail/skills-item-detail.component";
import { SkillsData } from '../../data/skillsData';
import { Skill } from '../../../core/interfaces/skill.interface';
// import {DragDropModule} from '@angular/cdk/drag-drop';



export interface SkillsList {
  lps: Skill[],
  ferTeste: Skill[],
  bd: Skill[],
  [key: string]: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  imports: [SkillsContentComponent, NgClass, SkillsItemDetailComponent]
})
export class SkillsComponent {

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
