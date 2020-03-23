import {Deserializable} from "./deserializable";

export class Joueurs implements Deserializable {
  public id: number;
  public  nom: string;
  public  prenom: string;
  public  numero: number;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
