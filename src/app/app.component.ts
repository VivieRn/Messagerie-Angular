import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ActivePeoplesComponent } from './active-peoples/active-peoples.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { NewMessageComponent } from './new-message/new-message.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MessagerieComponent } from './messagerie/messagerie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ActivePeoplesComponent, MessagesListComponent, NewMessageComponent, AccueilComponent, MessagerieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tp-Messagerie';
}
