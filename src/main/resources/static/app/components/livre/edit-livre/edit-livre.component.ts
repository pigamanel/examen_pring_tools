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
    datePublication: '',
    isbn: '',
    genre: ''
  };

  constructor(
    private livreService: LivreService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.livreService.getLivreById(id).subscribe(data => {
      this.livre = data;  // Assurez-vous que 'data' contient bien toutes les propriétés, y compris 'id'
    });
  }

  updateLivre(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.livreService.updateLivre(id, this.livre).subscribe(() => {
      this.router.navigate(['/list-livre']);
    });
  }
}
