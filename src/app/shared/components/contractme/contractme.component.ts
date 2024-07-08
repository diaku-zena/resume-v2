import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contractme',
  standalone: true,
  imports: [],
  templateUrl: './contractme.component.html',
  styleUrl: './contractme.component.scss'
})
export class ContractmeComponent {
  @Output() openForm = new EventEmitter();
  openContactForm(){
    this.openForm.emit();
  }
}
