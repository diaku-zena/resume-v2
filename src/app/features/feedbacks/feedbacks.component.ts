import { Component } from '@angular/core';
import { CommentComponent } from "../comment/comment.component";

@Component({
    selector: 'app-feedbacks',
    standalone: true,
    templateUrl: './feedbacks.component.html',
    styleUrl: './feedbacks.component.scss',
    imports: [CommentComponent]
})
export class FeedbacksComponent {

}
