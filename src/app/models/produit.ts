import { Marque } from "./marque";
import { Categorie } from "./categorie";

export class Produit {
  id?: number;
  reference?: string;
  description?: string;
  price?: any;
  soldQuantity?: any;
  availableQuantity?: any;

  marque?:Marque;
  categorie?:Categorie;
}