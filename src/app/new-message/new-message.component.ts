import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserMessage } from '../user-message';
import { MessageServiceService } from '../message-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-message',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  template: `
  <div class="new-message position-fixed bottom-0 end-0 w-75 p-3">
  <h2>Nouveau message :</h2>
  <form [formGroup]="angForm" class="d-flex flex-column m-3">
    <label for="from" class="form-label">De :</label>
    <input type="text" id="from" formControlName="from" [ngClass]="{'form-control': true, 'is-invalid': nomInvalide()}" class="form-control" />

    <label for="message" class="form-label">Message :</label>
    <textarea id="message" formControlName="message" [ngClass]="{'form-control': true, 'is-invalid': textInvalide()}" class="form-control"></textarea>
    <div *ngIf="nomInvalide()" class="alert alert-danger">
      Le nom est obligatoire !
    </div>
    <div *ngIf="textInvalide()" class="alert alert-danger">
      Le message est obligatoire !
    </div>
    <div class="d-flex justify-content-around mt-3">
      <input type="button" value="Valider" (click)="onClickValider()" class="btn btn-success" [disabled]="problemeValidation()"/>
      <input type="button" value="Annuler" (click)="onClickAnnuler()" class="btn btn-danger"/>
    </div>
  </form>
</div>



  `,
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent {
  angForm!: FormGroup;

  constructor(private fb: FormBuilder, private messageService: MessageServiceService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      from: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  problemeValidation() {
    return this.angForm.pristine || this.angForm.invalid;
  }

  textInvalide(): boolean {
    return this.champInvalide('message');
  }

  champInvalide(champ: string): boolean {
    const control = this.angForm.controls[champ];
    return control.invalid && (control.dirty || control.touched);
  }

  nomInvalide(): boolean {
    return this.champInvalide('from');
  }

  onClickValider() {
    const from = this.angForm.value.from;
    const message = this.angForm.value.message;
    const date = new Date();
    const userMessage: UserMessage = { from, message, date };
    this.messageService.addMessage(userMessage);
    this.angForm.reset();
  }

  onClickAnnuler() {
    this.angForm.reset();
  }
}
