import { Component, OnInit } from '@angular/core';
import {CommunicationService} from '../../services/communication.service';
import {RSVP} from '../../models/rsvp.model';

@Component({
  selector: 'app-partecipanti-cont',
  templateUrl: './partecipanti-cont.component.html',
  styleUrls: ['./partecipanti-cont.component.css']
})
export class PartecipantiContComponent implements OnInit {

  constructor(private commService: CommunicationService) { }
  partecipants: RSVP[];
  ngOnInit(): void {
    this.commService.getPartecipants().subscribe(part => this.partecipants = part)
  }

}
