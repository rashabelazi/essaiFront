import { Privilege } from "./privilege";

export class Role {
  id?: any;
  libelle?: string;
  active?:Boolean;
  
  privileges?:Privilege[]
}

