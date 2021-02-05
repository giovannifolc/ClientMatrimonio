import {Component, Input, OnInit} from '@angular/core';
import {CommunicationService} from '../services/communication.service';
import {RSVP} from '../models/rsvp.model';

@Component({
  selector: 'app-partecipanti',
  templateUrl: './partecipanti.component.html',
  styleUrls: ['./partecipanti.component.css']
})
export class PartecipantiComponent implements OnInit {


  constructor() { }

  @Input()
  parts: RSVP[];

  ngOnInit(): void {

  }

}
