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

  constructor() {
    this.varControl = 'userInfo';
  }

  ngOnInit() {
  }
  selectElement(value: string) {
    this.varControl = value;
  }

}
