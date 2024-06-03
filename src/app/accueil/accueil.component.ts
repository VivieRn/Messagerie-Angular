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
  <div class="container my-5">
  <div class="row justify-content-center">
    <div class="main col-md-8 text-center rounded">
      <h2 class="mb-4">Bienvenue dans l'application Messagerie</h2>
      <p>
        Cette application est développée sous Angular 18 et utilise Bootstrap pour sa mise en forme.
      </p>
      <p>
        Le but de ce développement est de montrer la puissance d'Angular pour développer une application modulaire et réactive permettant le suivi et l'utilisation des données pour la partie Front-End.
      </p>
      <p>
        L'application Messagerie offre plusieurs fonctionnalités clés :
      </p>
      <ul class="list-unstyled">
        <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>Création et gestion des messages en temps réel via un formulaire intuitif et réactif.</li>
        <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>Affichage d'un historique des messages envoyés, avec les détails sur l'auteur et la date d'envoi.</li>
        <li><i class="bi bi-check-circle-fill text-success me-2"></i>Suivi des personnes actives dans la messagerie, permettant de voir en temps réel les utilisateurs connectés.</li>
      </ul>
      <p>
        Ces fonctionnalités sont rendues possibles grâce à l'utilisation des services Angular pour la gestion des données, des composants autonomes pour une architecture modulaire, et de RxJS pour la gestion des flux de données asynchrones.
      </p>
    </div>
  </div>
</div>

  <div class="text-center">
    <h3>Autres projets</h3>
      <p>
        Retrouvez mes autres projets de développement web :
      </p>
      <p>
        <a href="https://nicolas-vivier.com" class="btn btn-primary mb-2">Mon site web</a>
      </p>
  </div>
</div>

  `,
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {

}
