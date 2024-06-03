import { Component } from '@angular/core';
import { ActivePeoplesComponent } from '../active-peoples/active-peoples.component';
import { MessagesListComponent } from '../messages-list/messages-list.component';
import { NewMessageComponent } from '../new-message/new-message.component';



@Component({
  selector: 'app-messagerie',
  standalone: true,
  imports: [ActivePeoplesComponent, MessagesListComponent, NewMessageComponent],
  template: `
    <app-active-peoples></app-active-peoples>
    <app-messages-list></app-messages-list>
    <app-new-message></app-new-message>

  `,
  styleUrl: './messagerie.component.css'
})
export class MessagerieComponent {

}
