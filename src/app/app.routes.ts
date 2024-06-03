import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { InconnuComponent } from './inconnu/inconnu.component';

export const routes: Routes = [
    {path: 'accueil', component: AccueilComponent},
    {path: '', redirectTo: '/accueil', pathMatch: 'full'},
    {path: 'messagerie', component: MessagerieComponent},
    {path: '**', component: InconnuComponent}
];
