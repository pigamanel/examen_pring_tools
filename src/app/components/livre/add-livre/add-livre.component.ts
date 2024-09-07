import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LivreService } from '../../../services/livre.service';
import { Livre } from '../../../models/livre.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.css']
})
export class AddLivreComponent {
  livre: Omit<Livre, 'id'> = {
    titre: '',
    auteur: '',
    datePublication: new Date(),
    isbn: '',
    genre: ''
  };

  constructor(private livreService: LivreService, private router: Router) { }

  addLivre(myForm: NgForm): void {
    const formValues = myForm.value;

    // Convertir la date en objet Date
    formValues.datePublication = new Date(formValues.datePublication);

    // Envoyer les données au backend
    this.livreService.addLivre(formValues).subscribe(() => {
      // Redirection après ajout
      this.router.navigate(['/list-livre']);
    }, (error) => {
      console.error('Erreur lors de l\'ajout du livre:', error);
    });
  }
}
