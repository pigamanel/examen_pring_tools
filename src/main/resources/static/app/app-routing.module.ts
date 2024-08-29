import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListLivreComponent } from './components/livre/list-livre/list-livre.component';
import { AddLivreComponent } from './components/livre/add-livre/add-livre.component';
import { EditLivreComponent } from './components/livre/edit-livre/edit-livre.component';
import { ListAuteurComponent } from './components/auteur/list-auteur/list-auteur.component';
import { AddAuteurComponent } from './components/auteur/add-auteur/add-auteur.component';
import { EditAuteurComponent } from './components/auteur/edit-auteur/edit-auteur.component';
import { ListEmpruntComponent } from './components/emprunt/list-emprunt/list-emprunt.component';
import { AddEmpruntComponent } from './components/emprunt/add-emprunt/add-emprunt.component';
import { EditEmpruntComponent } from './components/emprunt/edit-emprunt/edit-emprunt.component';

const routes: Routes = [
  { path: 'list-livre', component: ListLivreComponent },
  { path: 'add-livre', component: AddLivreComponent },
  { path: 'edit-livre/:id', component: EditLivreComponent },
  { path: 'list-auteur', component: ListAuteurComponent },
  { path: 'add-auteur', component: AddAuteurComponent },
  { path: 'edit-auteur/:id', component: EditAuteurComponent },
  { path: 'list-emprunt', component: ListEmpruntComponent },
  { path: 'add-emprunt', component: AddEmpruntComponent },
  { path: 'edit-emprunt/:id', component: EditEmpruntComponent },
  { path: '**', redirectTo: 'list-livre' } // Redirection en cas de chemin inconnu
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
