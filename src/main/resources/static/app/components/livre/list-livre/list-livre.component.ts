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
    this.livreService.getLivres().subscribe(data => {
      this.livres = data;
    });
  }

  deleteLivre(id: number): void {
    this.livreService.deleteLivre(id).subscribe(() => {
      this.livres = this.livres.filter(livre => livre.id !== id);
    });
  }
}
