import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserMessage } from './user-message';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {
  private messageSubject = new BehaviorSubject<UserMessage[]>([])
  message$ = this.messageSubject.asObservable()

  addMessage(message: UserMessage){
    const currentMessage = this.messageSubject.value
    this.messageSubject.next([...currentMessage, message])
  }

  clearMessages(){
    this.messageSubject.next([])
  }

  constructor() { }
}
