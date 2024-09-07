import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpruntService } from '../../../services/emprunt.service';
import { LivreService } from '../../../services/livre.service';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { Emprunt } from '../../../models/emprunt.model';
import { Livre } from '../../../models/livre.model';
import { Utilisateur } from '../../../models/utilisateur.model';

@Component({
  selector: 'app-add-emprunt',
  templateUrl: './add-emprunt.component.html',
  styleUrls: ['./add-emprunt.component.css']
})
export class AddEmpruntComponent implements OnInit {
  emprunt: Emprunt = new Emprunt(0, {} as Livre, {} as Utilisateur, '', '');
  livres: Livre[] = [];
  utilisateurs: Utilisateur[] = [];

  constructor(
    private empruntService: EmpruntService,
    private livreService: LivreService,
    private utilisateurService: UtilisateurService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.livreService.getLivres().subscribe(data => {
      this.livres = data;
    });

    this.utilisateurService.getUtilisateurs().subscribe(data => {
      this.utilisateurs = data;
    });
  }

  addEmprunt(): void {
    this.empruntService.addEmprunt(this.emprunt).subscribe(() => {
      this.router.navigate(['/list-emprunt']);
    });
  }
}
