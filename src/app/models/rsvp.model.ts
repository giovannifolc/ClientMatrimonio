export class RSVP{
  nome: string;
  cognome: string;
  email: string;
  adulti: number;
  bambini: number;
  intolleranze: string;

  constructor(nome:string, cognome:string, email:string, adulti:number, bambini: number = 0, intolleranze: string = "") {
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.adulti = adulti;
    this.bambini = bambini;
    this.intolleranze = intolleranze;
  }
}
