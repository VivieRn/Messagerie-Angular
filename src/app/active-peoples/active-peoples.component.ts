import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMessage } from '../user-message';
import { MessageServiceService } from '../message-service.service';
import { Subject, takeUntil } from 'rxjs';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-active-peoples',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  template: `
  <app-header></app-header>
  <div class="active-peoples position-fixed top-10vh start-0 w-25 p-3" style="height: calc(100vh - 10vh);">
  <h2 class="res fs-5 fs-sm-4 text-center text-sm-start">Personnes actives :</h2>
  <ul class="list-unstyled">
    <li *ngFor="let message of messages" class="p-2">
      <span class="fs-6 fs-md-5">{{message.from}}</span>
    </li>
  </ul>
  <div *ngIf="messages.length===0">
    Aucune personne à afficher.
  </div>
</div>



  `,
  styleUrl: './active-peoples.component.css'
})
export class ActivePeoplesComponent implements OnInit, OnDestroy {
 
  messages: UserMessage[] = []
  private destroy$ = new Subject<void>()

  constructor(private messageService: MessageServiceService){}

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
  

  ngOnInit(): void {
      this.messageService.message$.pipe(takeUntil(this.destroy$)).subscribe(messages =>{
        this.messages = messages
      })
  }
}
