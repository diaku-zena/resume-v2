import { Component, ViewChild } from '@angular/core';
import { SkillsContentComponent } from "../skills-content/skills-content.component";
import { NgClass } from '@angular/common';
import { SkillsItemDetailComponent } from "../skills-item-detail/skills-item-detail.component";
// import {DragDropModule} from '@angular/cdk/drag-drop';

export interface Skill {
  id: number;
  title: string;
  srcImg: string;
}

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
  skillsListAll: SkillsList = {
    lps: [
      {
        id: 1,
        title: "Python",
        srcImg: "assets/img/python-logo.png",
      },
      {
        id: 2,
        title: "Java",
        srcImg: "assets/img/java-logo.png",
      },
      {
        id: 3,
        title: "PHP",
        srcImg: "assets/img/php-logo.png",
      },
      {
        id: 4,
        title: "JavaScript",
        srcImg: "assets/img/javascript-logo.png",
      },
      {
        id: 5,
        title: "C++",
        srcImg: "assets/img/cpp-logo.png",
      },
      {
        id: 6,
        title: "C#",
        srcImg: "assets/img/csharp-logo.png",
      },
      {
        id: 7,
        title: "TypeScript",
        srcImg: "assets/img/typescript-logo.png",
      },
      {
        id: 8,
        title: "C",
        srcImg: "assets/img/c-logo.png",
      },
    ],
    ferTeste: [
      {
        id: 1,
        title: "Insomnia",
        srcImg: "assets/img/insomnia-logo.png",
      },
      {
        id: 2,
        title: "Postman",
        srcImg: "assets/img/postman-logo.png",
      },
    ],
    bd: [
      {
        id: 1,
        title: "PostgreSQL",
        srcImg: "assets/img/postgres-logo.png",
      },
      {
        id: 2,
        title: "SQL Server",
        srcImg: "assets/img/sqlserver-logo.png",
      },
      {
        id: 3,
        title: "MySQL",
        srcImg: "assets/img/mysql-logo.png",
      },
    ],
    frameworks: [
      {
        id: 1,
        title: "Angular",
        srcImg: "assets/img/angular-logo.png",
      },
      {
        id: 2,
        title: "Django",
        srcImg: "assets/img/django-logo.png",
      },
      {
        id: 3,
        title: "Laravel",
        srcImg: "assets/img/laravel-logo.png",
      },
      {
        id: 4,
        title: "React",
        srcImg: "assets/img/react-logo.png",
      },
      {
        id: 5,
        title: "React Native",
        srcImg: "assets/img/react.png",
      },
      {
        id: 6,
        title: "Aspnet Core",
        srcImg: "assets/img/aspnetcore-logo.png",
      },
      {
        id: 7,
        title: "EF Core",
        srcImg: "assets/img/efcore-logo.png",
      },
      {
        id: 8,
        title: "Spring",
        srcImg: "assets/img/spring-logo.png",
      },
      {
        id: 9,
        title: "Bootstrap",
        srcImg: "assets/img/bootstrap-logo.png",
      },
      {
        id: 10,
        title: "GSAP",
        srcImg: "assets/img/gsap-logo.png",
      },
      {
        id: 11,
        title: "Spring",
        srcImg: "assets/img/spring-logo.png",
      },
      {
        id: 12,
        title: "JQuery",
        srcImg: "assets/img/jquery-logo.png",
      },
      {
        id: 13,
        title: "Angular Matirial",
        srcImg: "assets/img/angularmaterial-logo.png",
      },
      {
        id: 14,
        title: "Syncfusion",
        srcImg: "assets/img/syncfusion-logo.png",
      },
      {
        id: 15,
        title: "Django Channel",
        srcImg: "assets/img/djangochannel-logo.png",
      },
      {
        id: 16,
        title: "CoreUI",
        srcImg: "assets/img/coreui-logo.png",
      },
    ],
    colab: [
      {
        id: 1,
        title: "Git",
        srcImg: "assets/img/git-logo.png",
      },
      {
        id: 2,
        title: "GitHub",
        srcImg: "assets/img/github-logo.png",
      },
      {
        id: 3,
        title: "Docker",
        srcImg: "assets/img/docker-logo.png",
      },
    ],
    ambiente: [
      {
        id: 1,
        title: "Visual Studio",
        srcImg: "assets/img/visualstudio-logo.png",
      },
      {
        id: 1,
        title: "Visual Studio Code",
        srcImg: "assets/img/vscode-logo.png",
      },
      {
        id: 2,
        title: "Pycharm",
        srcImg: "assets/img/pycharm-logo.png",
      },
    ]
  }

  skillsList!: Skill[];

  varControl: string = "lps";
selectedSkill: any;

  constructor(){
    this.skillsList = this.skillsListAll[this.varControl];
  }

  selectElement(value: any) {
    this.varControl = value;
    this.skillsList = this.skillsListAll[value];

  }
}
