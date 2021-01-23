import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpParams} from '@angular/common/http';
import {CommunicationService} from '../services/communication.service';
import {RSVP} from '../models/rsvp.model';
import {ActivatedRoute} from '@angular/router';
declare var ol: any;
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})

export class InfoComponent implements OnInit {
  latitude: number = 45.07922;
  longitude: number =  7.62078;
  map: any;
  constructor(private commService: CommunicationService, private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.route.fragment.subscribe(f => {
      const element = document.querySelector("#" + f)
      if (element)
        element.scrollIntoView()})
  }
  rsvpForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    cognome: new FormControl('', Validators.required),
    email: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    adulti: new FormControl('', [Validators.required, Validators.min(1)]),
    bambini: new FormControl('', Validators.min(0)),
    intolleranze: new FormControl('')
  });
  navigateTo(luogo: string) {
    if(luogo == 'chiesa'){
      window.open('https://goo.gl/maps/viiADx5rWwoHY1qY6', '_blank');
    }else if(luogo == 'ristorante'){
      window.open('https://goo.gl/maps/yfgZiwV4a8xNbUpW6', '_blank');
    }
  }

  getErrorNome() {
    if (this.rsvpForm.controls.nome.hasError('required')) {
      return 'Campo necessario';
    }
  }

  getErrorCognome() {
    if (this.rsvpForm.controls.cognome.hasError('required')) {
      return 'Campo necessario';
    }
  }

  getErrorEmail() {
    if (this.rsvpForm.controls.email.hasError('required')) {
      return 'Campo necessario';
    }else{
      return 'Inserire una mail corretta';
    }
  }

  getErrorAdulti() {
    if (this.rsvpForm.controls.adulti.hasError('required')) {
      return 'Campo necessario';
    }else{
      return 'Inserire un valore positivo';
    }
  }
    getErrorBambini() {
      if (this.rsvpForm.controls.bambini.hasError('min')) {
        return 'Vuoi regalarcene qualcuno?';
      }
  }

  submitRSVP() {
  // se sono presenti errori nel formGroup non faccio l'operazione ma visualizzo nella dialog tramite flag gli errori
    if (this.rsvpForm.controls.nome.value === '' || this.rsvpForm.controls.cognome.value === '' ||
      this.rsvpForm.controls.email.hasError('required') ||  this.rsvpForm.controls.adulti.hasError('min')
      || this.rsvpForm.controls.adulti.hasError('required') || this.rsvpForm.controls.bambini.hasError('min') ) {
      //non va bene
    } else {
      //altrimenti inizializzo i parametri necessari
      let data: RSVP;
      let bambini = this.rsvpForm.controls.bambini.value;
      let intolleranze = this.rsvpForm.controls.intolleranze.value;
      let nome = this.rsvpForm.controls.nome.value;
      let cognome = this.rsvpForm.controls.cognome.value;
      let email = this.rsvpForm.controls.email.value;
      let adulti = this.rsvpForm.controls.adulti.value;
      if((bambini != "" || bambini != 0) && intolleranze != ""){
        data = new RSVP(nome, cognome, email, adulti, bambini, intolleranze);
      }else if(bambini != 0 || bambini != ""){
        data = new RSVP(nome, cognome, email, adulti, bambini, "");
      }else if(intolleranze != ""){
        data = new RSVP(nome, cognome, email, adulti, 0, intolleranze);
      }else{
        data = new RSVP(nome, cognome, email, adulti, 0, "")
      }
      this.commService.sendRSVP(data)
      //manda il tutto al generatore di email

    }


  }
}

