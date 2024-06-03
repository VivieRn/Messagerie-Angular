import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="header d-flex flex-column justify-content-center align-items-center" style="height: 10vh;">
  <h1 class="mb-1">MESSAGERIE</h1>
  <nav class="navbar navbar-expand-lg navbar-light p-0">
    <div class="collapse navbar-collapse justify-content-center">
      <ul class="navbar-nav">
        <li class="nav-item" routerLinkActive="active">
          <a class="nav-link" routerLink="/accueil">Accueil</a>
        </li>
        <li class="nav-item" routerLinkActive="active">
          <a class="nav-link" routerLink="/messagerie">Messagerie</a>
        </li>
      </ul>
    </div>
  </nav>
</header>


  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
