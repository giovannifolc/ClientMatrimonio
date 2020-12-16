import { Component, OnInit } from '@angular/core'
import { timer } from 'rxjs'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  timer = ' ';

  clock = timer(0, 1000);
  subscribe = this.clock.subscribe(val => {
    let now = new Date();
    let date = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDay(), now.getHours(), now.getUTCMinutes(), now.getUTCMinutes(), now.getUTCSeconds());
    let futuredate = Date.UTC(2021, 4, 10, 10, 30, 0);
    let missingTime = futuredate - date;
    let days = Math.floor(missingTime / (24 * 3600));
    let hours = Math.floor((missingTime - (days * 24 * 3600)) / 3600);
    let minutes = Math.floor((missingTime - (days * 24 * 3600) - hours * 3600) / 60);
    let seconds = Math.floor(missingTime - (days * 24 * 3600) - (hours * 3600) - minutes * 60);
    this.timer = days + ' Giorni ' + hours + ' Ore ' + minutes + ' Minuti ' + seconds + ' Secondi';
  });

  constructor() { }

  ngOnInit(): void {

  }

}
