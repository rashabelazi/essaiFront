import { Component, OnInit } from '@angular/core';
import { MarqueService } from '../services/marque.service'; // Assurez-vous que le chemin est correct
import { Marque } from '../models/marque';

@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.css']
})
export class MarqueComponent implements OnInit {

  marques: Marque[] = [];

  constructor(private marqueService: MarqueService) { }

  ngOnInit(): void {
    this.getAllMarques();
  }

  getAllMarques(): void {
    this.marqueService.getAllMarques().subscribe(
      response => {
        this.marques = response;
      },
      error => {
        console.error('Erreur lors de la récupération des marques', error);
      }
    );
  }
}
