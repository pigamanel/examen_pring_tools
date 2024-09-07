import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LivreService } from '../../../services/livre.service';
import { Livre } from '../../../models/livre.model';

@Component({
  selector: 'app-edit-livre',
  templateUrl: './edit-livre.component.html',
  styleUrls: ['./edit-livre.component.css']
})
export class EditLivreComponent implements OnInit {
  livre: Livre = {
    id: 0,
    titre: '',
    auteur: '',
    datePublication: '',  // Initialisé comme string pour le formulaire
    isbn: '',
    genre: ''
  };
  errorMessage: string = '';

  constructor(
    private livreService: LivreService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = +idParam;
      console.log(`Chargement du livre avec l'ID: ${id}`);
      this.livreService.getLivreById(id).subscribe({
        next: data => {
          console.log('Données du livre reçues:', data);
          this.livre = {
            ...data,
            datePublication: this.formatDate(new Date(data.datePublication))  // Formatage pour le champ date
          };
        },
        error: err => {
          this.errorMessage = 'Erreur lors du chargement du livre.';
          console.error('Erreur lors du chargement du livre:', err);
        }
      });
    } else {
      this.errorMessage = 'ID du livre non fourni.';
      console.error('ID du livre non fourni dans les paramètres de route.');
    }
  }

  // Méthode pour formater une date au format yyyy-MM-dd
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  updateLivre(): void {
    // Conversion de la chaîne en Date avant la mise à jour si nécessaire
    if (typeof this.livre.datePublication === 'string') {
      this.livre.datePublication = new Date(this.livre.datePublication);
    }

    console.log('Soumission du formulaire avec les données suivantes:', this.livre);
    this.livreService.updateLivre(this.livre.id, this.livre).subscribe({
      next: () => {
        console.log('Livre mis à jour avec succès.');
        this.router.navigate(['/list-livre']);
      },
      error: err => {
        this.errorMessage = 'Erreur lors de la mise à jour du livre.';
        console.error('Erreur lors de la mise à jour du livre:', err);
      }
    });
  }
}
