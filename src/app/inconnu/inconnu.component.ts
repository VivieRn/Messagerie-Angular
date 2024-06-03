import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-inconnu',
  standalone: true,
  imports: [HeaderComponent],
  template: `
  <app-header></app-header>
  <div class="inconnu container d-flex flex-column align-items-center justify-content-center">
  <div class="text-center mb-4">
    <h2>404</h2>
    <p>
      la page demandé n'existe pas.
    </p>
  </div>
</div>
  `,
  styleUrl: './inconnu.component.css'
})
export class InconnuComponent {

}
