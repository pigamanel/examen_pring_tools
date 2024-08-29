import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuteurService } from '../../../services/auteur.service';
import { Auteur } from '../../../models/auteur.model';

@Component({
  selector: 'app-add-auteur',
  templateUrl: './add-auteur.component.html',
  styleUrls: ['./add-auteur.component.css']
})
export class AddAuteurComponent {
  auteur: Auteur = {
    id: 0,
    nom: '',
    dateNaissance: '',
    nationalite: ''
  };

  constructor(private auteurService: AuteurService, private router: Router) { }

  addAuteur(): void {
    this.auteurService.addAuteur(this.auteur).subscribe(() => {
      this.router.navigate(['/list-auteur']);
    });
  }
}
