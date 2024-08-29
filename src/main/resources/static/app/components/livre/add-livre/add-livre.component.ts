import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LivreService } from '../../../services/livre.service';
import { Livre } from '../../../models/livre.model';

@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.css']
})
export class AddLivreComponent {
  livre: Livre = {
    id: 0,
    titre: '',
    auteur: '',
    datePublication: '',
    isbn: '',
    genre: ''
  };

  constructor(private livreService: LivreService, private router: Router) { }

  addLivre(): void {
    this.livreService.addLivre(this.livre).subscribe(() => {
      this.router.navigate(['/list-livre']);
    });
  }
}
