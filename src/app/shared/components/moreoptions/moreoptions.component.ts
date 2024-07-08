import { AsyncPipe, NgComponentOutlet } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import {MatTabsModule} from '@angular/material/tabs';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ThemePalette } from '@angular/material/core';
import { EquipComponent } from '../equip/equip.component';
import { ParceirosComponent } from '../parceiros/parceiros.component';
import { ContractmeComponent } from '../contractme/contractme.component';

export interface ExampleTab {
  label: string;
  content: any;
}

@Component({
  selector: 'app-moreoptions',
  standalone: true,
  imports: [MatTabsModule, AsyncPipe, NgComponentOutlet],
  templateUrl: './moreoptions.component.html',
  styleUrl: './moreoptions.component.scss',
  encapsulation: ViewEncapsulation.None

})
export class MoreoptionsComponent {
  asyncTabs: Observable<ExampleTab[]>;
  themePalette: ThemePalette = 'accent';
  
  constructor() {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'Equipa', content: EquipComponent},
          {label: 'Parceiros', content: ParceirosComponent},
          {label: 'Me Contrate', content: ContractmeComponent},
        ]);
      }, 1000);
    });
  }
}
