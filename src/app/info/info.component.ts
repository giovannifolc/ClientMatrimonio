import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpParams} from '@angular/common/http';
import {CommunicationService} from '../services/communication.service';
import {RSVP} from '../models/rsvp.model';
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
  constructor(private commService: CommunicationService) {
  }
  ngOnInit() {
    /*this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([this.longitude, this.latitude]),
        zoom:17
      })
    });

    this.addPoint(this.latitude, this.longitude);*/
  }

  /*setCenter() {
    var view = this.map.getView();
    view.setCenter(ol.proj.fromLonLat([this.longitude, this.latitude]));
    view.addMarker(ol.proj.fromLonLat([this.longitude, this.latitude]));
    view.setZoom(12);
  }

  addPoint(lat: number, lng: number) {
    var vectorLayer = new ol.layer.Vector({
      source: new ol.source.Vector({
        features: [new ol.Feature({
          geometry: new ol.geom.Point(ol.proj.transform([lng, lat], 'EPSG:4326', 'EPSG:3857')),
        })]
      }),
      style: new ol.style.Style({
        image: new ol.style.Icon({
          anchor: [0.5, 0.5],
          anchorXUnits: "fraction",
          anchorYUnits: "fraction",
          src: "assets/img/location-pointer.png"
        })
      })
    });
    this.map.addLayer(vectorLayer);
  }
*/
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

