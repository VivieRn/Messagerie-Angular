import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
   <header class="header d-flex flex-column justify-content-center align-items-center" style="height: 10vh;">
  <h1 class="mb-1 text-center text-md-start fs-4 fs-md-2">MESSAGERIE</h1>
  <nav class="navbar navbar-light p-0 w-100">
    <div class="container-fluid p-0 d-flex justify-content-center">
      <ul class="navbar-nav d-flex flex-row">
        <li class="nav-item mx-2" routerLinkActive="active">
          <a class="nav-link fs-6 fs-md-5" routerLink="/accueil">Accueil</a>
        </li>
        <li class="nav-item mx-2" routerLinkActive="active">
          <a class="nav-link fs-6 fs-md-5" routerLink="/messagerie">Messagerie</a>
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
