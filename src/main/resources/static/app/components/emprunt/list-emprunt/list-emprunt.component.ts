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

  constructor(private empruntService: EmpruntService) { }

  ngOnInit(): void {
    this.empruntService.getEmprunts().subscribe(data => {
      this.emprunts = data;
    });
  }

  returnEmprunt(id: number, retourDate: string): void {
    this.empruntService.returnEmprunt(id, retourDate).subscribe(() => {
      // Actualiser la liste des emprunts
      this.emprunts = this.emprunts.filter(emprunt => emprunt.id !== id);
    });
  }
}
