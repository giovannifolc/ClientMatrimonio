import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // #region Properties (7)

  public clock = timer(0, 1000);
  public days = 0;
  public hours = 0;
  public minutes = 0;
  public seconds = 0;
  public subscribe = this.clock.subscribe(val => {
    const now = new Date().getTime();
    const futuredate = Date.parse('April 10 2021 10:30:00 GMT+0100');
    const missingTime = futuredate - now;

    this.seconds = Math.floor((missingTime / 1000) % 60);
    this.minutes = Math.floor((missingTime / 1000 / 60) % 60);
    this.hours = Math.floor((missingTime / (1000 * 60 * 60)) % 24);
    this.days = Math.floor(missingTime / (1000 * 60 * 60 * 24));
    this.timer = this.days + ' Giorni ' + this.hours + ' Ore ' + this.minutes + ' Minuti ' + this.seconds + ' Secondi';

  });
  public timer = '';

  // #endregion Properties (7)

  // #region Constructors (1)

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.iconRegistry.addSvgIcon(
      'church',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/church.svg'));
    this.iconRegistry.addSvgIcon(
      'party',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/party.svg'));
    this.iconRegistry.addSvgIcon(
      'calendar',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/calendar.svg'));
  }

  // #endregion Constructors (1)
}
