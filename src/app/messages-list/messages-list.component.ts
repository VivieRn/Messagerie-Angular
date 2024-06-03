import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageServiceService } from '../message-service.service';
import { CommonModule } from '@angular/common';
import { UserMessage } from '../user-message';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="messages-list position-fixed top-10vh end-0 w-75 p-3 overflow-auto" style="height: calc(100vh - 10vh - 33.7vh);">
  <h2>Historique des messages :</h2>
  <div>
    <div class="message p-2 rounded mb-3" *ngFor="let message of messages">
      <p><span class="fw-bold">{{message.from}}</span> a écrit :</p>
      <div class="main-message">
        {{message.message}}
      </div>
      <div class="d-flex flex-row-reverse text-muted">
        <p>Envoyé le {{message.date | date:'dd/MM/yyyy'}} à {{message.date | date:'HH:mm'}}</p>
      </div>
    </div>
    <div *ngIf="messages.length === 0">
      Aucun message à afficher.
    </div>
  </div>
</div>



  `,
  styleUrl: './messages-list.component.css'
})
export class MessagesListComponent implements OnInit, OnDestroy {

  messages: UserMessage[] = []
  private destroy$ = new Subject<void>()

  constructor(private messageService: MessageServiceService){}

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete
  }

  ngOnInit(): void {
      this.messageService.message$.pipe(takeUntil(this.destroy$)).subscribe(messages =>{
        this.messages = messages.slice().reverse()
      })
  }

}
