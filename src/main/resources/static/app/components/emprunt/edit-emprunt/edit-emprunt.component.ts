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
    id: 0, // Assurez-vous que l'ID est initialisé
    livre: {} as Livre,
    utilisateur: {} as Utilisateur,
    dateEmprunt: '',
    dateRetour: ''
  };
  livres: Livre[] = [];
  utilisateurs: Utilisateur[] = [];

  constructor(
    private empruntService: EmpruntService,
    private livreService: LivreService,
    private utilisateurService: UtilisateurService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.empruntService.getEmprunt(id).subscribe(data => {
      this.emprunt = data;
    });

    this.livreService.getLivres().subscribe(data => {
      this.livres = data;
    });

    this.utilisateurService.getUtilisateurs().subscribe(data => {
      this.utilisateurs = data;
    });
  }

  updateEmprunt(): void {
    this.empruntService.updateEmprunt(this.emprunt.id, this.emprunt).subscribe(() => {
      this.router.navigate(['/list-emprunt']);
    });
  }
}
