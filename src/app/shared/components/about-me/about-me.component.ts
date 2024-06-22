import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit {
  varControl: string;
  selectedMenuTitle = '';
  isMenuVisible!: boolean;
  constructor() {
    this.varControl = 'userInfo';
    this.selectedMenuTitle = this.varControl
  }

  ngOnInit() {
  }
  selectElement(value: string) {
    this.varControl = value;
    this.toggleMenu();
    this.selectedMenuTitle = this.varControl
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
