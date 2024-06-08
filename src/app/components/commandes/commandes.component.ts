import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../services/commande.service'; // Assurez-vous que le chemin est correct
import { Commande } from '../models/commande';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  commandes: Commande[] = [];

  constructor(private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.getAllCommandes();
  }

  getAllCommandes(): void {
    this.commandeService.getAllCommandes().subscribe(
      response => {
        this.commandes = response;
      },
      error => {
        console.error('Erreur lors de la récupération des commandes', error);
      }
    );
  }

  validerCommande(id: number): void {
    this.commandeService.validerCommande(id).subscribe(
      () => {
        console.log('Commande validée avec succès');
        // Recharger la liste des commandes après la validation
        this.getAllCommandes();
      },
      error => {
        console.error('Erreur lors de la validation de la commande', error);
      }
    );
  }
}
