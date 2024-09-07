import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpruntService } from '../../../services/emprunt.service';
import { LivreService } from '../../../services/livre.service';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { Emprunt } from '../../../models/emprunt.model';
import { Livre } from '../../../models/livre.model';
import { Utilisateur } from '../../../models/utilisateur.model';

@Component({
  selector: 'app-edit-emprunt',
  templateUrl: './edit-emprunt.component.html',
  styleUrls: ['./edit-emprunt.component.css']
})
export class EditEmpruntComponent implements OnInit {
  emprunt: Emprunt = {
    id: 0,
    livre: {} as Livre,
    utilisateur: {} as Utilisateur,
    dateEmprunt: new Date(),
    dateRetour: new Date()
  };
  livres: Livre[] = [];
  utilisateurs: Utilisateur[] = [];
  errorMessage: string = '';

  constructor(
    private empruntService: EmpruntService,
    private livreService: LivreService,
    private utilisateurService: UtilisateurService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;

    if (isNaN(id) || id <= 0) {
      this.errorMessage = 'ID invalide.';
      return;
    }

    this.empruntService.getEmprunt(id).subscribe({
      next: (data: Emprunt) => {
        this.emprunt = {
          ...data,
          dateEmprunt: data.dateEmprunt ? new Date(data.dateEmprunt) : new Date(),
          dateRetour: data.dateRetour ? new Date(data.dateRetour) : new Date()
        };
      },
      error: (err: any) => {
        this.errorMessage = 'Erreur lors de la récupération de l\'emprunt.';
        console.error('Erreur:', err);
      }
    });

    this.livreService.getAllLivres().subscribe({
      next: (data: Livre[]) => this.livres = data,
      error: (err: any) => {
        this.errorMessage = 'Erreur lors de la récupération des livres.';
        console.error('Erreur:', err);
      }
    });

    this.utilisateurService.getUtilisateurs().subscribe({
      next: (data: Utilisateur[]) => this.utilisateurs = data,
      error: (err: any) => {
        this.errorMessage = 'Erreur lors de la récupération des utilisateurs.';
        console.error('Erreur:', err);
      }
    });
  }

  updateEmprunt(): void {
    if (!this.emprunt.id) {
      this.errorMessage = 'ID invalide.';
      return;
    }

    this.empruntService.updateEmprunt(this.emprunt.id, this.emprunt).subscribe({
      next: () => this.router.navigate(['/list-emprunt']),
      error: (err: any) => {
        this.errorMessage = 'Erreur lors de la mise à jour de l\'emprunt.';
        console.error('Erreur:', err);
      }
    });
  }
}
