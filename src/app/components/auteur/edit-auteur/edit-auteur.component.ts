import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuteurService } from '../../../services/auteur.service';
import { Auteur } from '../../../models/auteur.model';

@Component({
  selector: 'app-edit-auteur',
  templateUrl: './edit-auteur.component.html',
  styleUrls: ['./edit-auteur.component.css']
})
export class EditAuteurComponent implements OnInit {
  auteur: Auteur = {
    id: 0, // Assurez-vous que 'id' est initialisé
    nom: '',
    dateNaissance: '',
    nationalite: ''
  };

  constructor(
    private auteurService: AuteurService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.auteurService.getAuteur(id).subscribe(data => {
      this.auteur = data;
    });
  }

  updateAuteur(): void {
    this.auteurService.updateAuteur(this.auteur.id, this.auteur).subscribe(() => {
      this.router.navigate(['/list-auteurs']);
    });
  }
}
