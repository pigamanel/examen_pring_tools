import { Component, OnInit } from '@angular/core';
import { EmpruntService } from '../../../services/emprunt.service';
import { Emprunt } from '../../../models/emprunt.model';

@Component({
  selector: 'app-list-emprunt',
  templateUrl: './list-emprunt.component.html',
  styleUrls: ['./list-emprunt.component.css']
})
export class ListEmpruntComponent implements OnInit {
  emprunts: Emprunt[] = [];
  errorMessage: string = '';

  constructor(private empruntService: EmpruntService) { }

  ngOnInit(): void {
    this.loadEmprunts();
  }

  loadEmprunts(): void {
    this.empruntService.getEmprunts().subscribe({
      next: data => {
        this.emprunts = data.map(emprunt => ({
          ...emprunt,
          dateEmprunt: new Date(emprunt.dateEmprunt),
          dateRetour: emprunt.dateRetour ? new Date(emprunt.dateRetour) : undefined
        }));
      },
      error: err => {
        this.errorMessage = 'Erreur lors du chargement des emprunts.';
        console.error('Erreur lors du chargement des emprunts:', err);
      }
    });
  }

  returnEmprunt(emprunt: Emprunt, dateRetour: Date): void {
    if (!dateRetour || isNaN(dateRetour.getTime())) {
      this.errorMessage = 'Date de retour invalide.';
      return;
    }

    const updatedEmprunt: Emprunt = {
      ...emprunt,
      dateRetour: dateRetour
    };

    this.empruntService.updateEmprunt(emprunt.id, updatedEmprunt).subscribe({
      next: () => {
        this.loadEmprunts();
      },
      error: err => {
        this.errorMessage = 'Erreur lors du retour de l\'emprunt.';
        console.error('Erreur lors du retour de l\'emprunt:', err);
      }
    });
  }

  prepareReturn(emprunt: Emprunt, returnDateInput: HTMLInputElement): void {
    const dateRetour = new Date(returnDateInput.value);
    if (isNaN(dateRetour.getTime())) {
      this.errorMessage = 'Date de retour invalide.';
      return;
    }
    this.returnEmprunt(emprunt, dateRetour);
  }
}
