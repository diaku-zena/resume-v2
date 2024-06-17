import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TimeDateComponent } from "../time-date/time-date.component";
import { ContactFormComponent } from "../contact-form/contact-form.component";

@Component({
    selector: 'app-right-tools',
    standalone: true,
    templateUrl: './right-tools.component.html',
    styleUrl: './right-tools.component.scss',
    providers: [],
    imports: [TimeDateComponent, ContactFormComponent]
})
export class RightToolsComponent  {
    showContactForm = false;
}
