import { Component, OnInit } from '@angular/core';
import { LivreService } from '../../../services/livre.service';
import { Livre } from '../../../models/livre.model';

@Component({
  selector: 'app-list-livre',
  templateUrl: './list-livre.component.html',
  styleUrls: ['./list-livre.component.css']
})
export class ListLivreComponent implements OnInit {
  livres: Livre[] = [];

  constructor(private livreService: LivreService) { }

  ngOnInit(): void {
    this.getLivres();
  }

  getLivres(): void {
    this.livreService.getAllLivres().subscribe(
      (data) => {
        this.livres = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des livres :', error);
      }
    );
  }

  deleteLivre(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce livre?')) {
      this.livreService.deleteLivre(id).subscribe(() => {
        this.livres = this.livres.filter(livre => livre.id !== id);
      },
        (error) => {
          console.error('Erreur lors de la suppression du livre :', error);
        });
    }
  }
}
