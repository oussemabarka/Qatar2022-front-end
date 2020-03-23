import {Deserializable} from "./deserializable";
import { Joueurs } from './joueurs';
export class Equipes implements Deserializable  {
 public  id: number;
 public  effectif: number;
 public  nom: string;
 public  joueur: Joueurs;
    deserialize(input: any): this  {
      Object.assign(this, input);
      this.joueur = new Joueurs().deserialize(input.joueur);
      return this;
    }
}

