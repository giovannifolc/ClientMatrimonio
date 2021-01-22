export class Regalo{
  nomePartecipante: string;
  emailPartecipante: string;
  quota: number;
  oggettoId: string;


  constructor(nomePartecipante: string, emailPartecipante: string, quota: number, oggettoId: string) {
    this.nomePartecipante = nomePartecipante;
    this.emailPartecipante = emailPartecipante;
    this.quota = quota;
    this.oggettoId = oggettoId;
  }

}
