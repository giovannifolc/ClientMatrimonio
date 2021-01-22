export class Oggetto
{
  nome: string;
  immagine;
  prezzoTotale: number;
  prezzoPagato: number;
  prezzoRimasto: number;


  static equals(c1: Oggetto, c2: Oggetto){
    return c1.nome === c2.nome;
  }
}
