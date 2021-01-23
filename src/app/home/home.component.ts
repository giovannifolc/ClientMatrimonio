import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // #region Properties (7)
  public Images = [
    "assets/images/grazie/od_laurea_j.jpg",
    "assets/images/grazie/os_simo_and_co_a_serre.jpg",
    "assets/images/grazie/od_leti_e_compagni_liceo.jpg",
    "assets/images/grazie/os_simo_e_famiglia.jpg",
    "assets/images/grazie/od_leti_e_mitica_segre.jpg",
    "assets/images/grazie/os_poli.jpg",
    "assets/images/grazie/od_leti_e_svizzere.jpg",
    "assets/images/grazie/os_simo_and_co_al_lago.jpg",
    "assets/images/grazie/od_leti_simo_e_franco.jpg",
    "assets/images/grazie/os_simo_leti_e_j.jpg"
  ]
  public clock = timer(0, 1000);
  public days = 0;
  public hours = 0;
  public minutes = 0;
  public seconds = 0;
  public timerExpired = false;
  public subscribe = this.clock.subscribe(val => {
    const now = new Date().getTime();
    const futuredate = Date.parse('April 10 2021 10:30:00 GMT+0100');
    const missingTime = futuredate - now;

    this.seconds = Math.floor((missingTime / 1000) % 60);
    this.minutes = Math.floor((missingTime / 1000 / 60) % 60);
    this.hours = Math.floor((missingTime / (1000 * 60 * 60)) % 24);
    this.days = Math.floor(missingTime / (1000 * 60 * 60 * 24));
    // this.timer = this.days + ' Giorni ' + this.hours + ' Ore ' + this.minutes + ' Minuti ' + this.seconds + ' Secondi';

    if (missingTime < 0) {
      this.timerExpired = true;
    }
  });
  public timer = '';

  // #endregion Properties (7)

  // #region Constructors (1)

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    config: NgbCarouselConfig
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
    config.interval = 4000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  // #endregion Constructors (1)
}
