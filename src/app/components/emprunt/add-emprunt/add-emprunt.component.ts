import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpruntService } from '../../../services/emprunt.service';
import { LivreService } from '../../../services/livre.service';
import { UtilisateurService } from '../../../services/utilisateur.service'; // Chemin corrigé
import { Emprunt } from '../../../models/emprunt.model';
import { Livre } from '../../../models/livre.model';
import { Utilisateur } from '../../../models/utilisateur.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-emprunt',
  templateUrl: './add-emprunt.component.html',
  styleUrls: ['./add-emprunt.component.css']
})
export class AddEmpruntComponent implements OnInit {
  emprunt: Emprunt = new Emprunt(0, {} as Livre, {} as Utilisateur, new Date(), new Date());
  livres: Livre[] = [];
  utilisateurs: Utilisateur[] = [];

  constructor(
    private empruntService: EmpruntService,
    private livreService: LivreService,
    private utilisateurService: UtilisateurService, // Corrigé ici aussi
    private router: Router
  ) { }

  ngOnInit(): void {
    this.livreService.getAllLivres().subscribe((data: Livre[]) => {
      this.livres = data;
    });

    this.utilisateurService.getUtilisateurs().subscribe((data: Utilisateur[]) => {
      this.utilisateurs = data;
    });
  }

  addEmprunt(myForm: NgForm): void {
    if (myForm.valid) {
      const newEmprunt: Emprunt = {
        ...this.emprunt,
        dateEmprunt: this.emprunt.dateEmprunt ? new Date(this.emprunt.dateEmprunt) : new Date(),
        dateRetour: this.emprunt.dateRetour ? new Date(this.emprunt.dateRetour) : new Date()
      };

      this.empruntService.addEmprunt(newEmprunt).subscribe(
        () => this.router.navigate(['/list-emprunt']),
        (error: any) => console.error('Erreur lors de l\'ajout de l\'emprunt:', error)
      );
    } else {
      console.warn('Le formulaire n\'est pas valide.');
    }
  }
}
