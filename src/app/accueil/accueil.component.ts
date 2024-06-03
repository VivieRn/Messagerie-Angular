import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [HeaderComponent],
  template: `
  <app-header></app-header>
  <div class="accueil container d-flex flex-column align-items-center justify-content-center">
  <div class="text-center mb-4">
    <h2>Bienvenue dans l'application Messagerie</h2>
    <p>
      Cette application est développée sous Angular 18 et utilise Bootstrap pour sa mise en forme.
    </p>
    <p>
      Le but de ce développement est de montrer la puissance d'Angular pour développer une application modulaire et réactive permettant le suivi et l'utilisation des données pour la partie Front-End.
    </p>
  </div>
  <div class="text-center">
    <h3>Autres projets</h3>
    <p>
      Retrouvez mes autres projets de développement web :
    </p>
    <p>
      <a href="https://nicolas-vivier.com" class="btn btn-primary mb-2">Mon site web</a>
    </p>
    <p>
      <a href="https://www.linkedin.com/in/nicolas-vivier-web-dev/" class="btn btn-primary">Mon LinkedIn</a>
    </p>
  </div>
</div>

  `,
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {

}
