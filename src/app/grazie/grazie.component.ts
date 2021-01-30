import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-grazie',
  templateUrl: './grazie.component.html',
  styleUrls: ['./grazie.component.scss']
})
export class GrazieComponent implements OnInit, AfterViewInit {
  // #region Properties (15)

  public ImageData1 = [
    "assets/images/grazie/od_laurea_j.jpg",
    "assets/images/grazie/od_leti_e_compagni_liceo.jpg",
    "assets/images/grazie/od_leti_e_mitica_segre.jpg",
    "assets/images/grazie/od_leti_e_svizzere.jpg",
    "assets/images/grazie/od_leti_simo_e_franco.jpg"
  ]
  public ImageData2 = [
    "assets/images/grazie/os_poli.jpg",
    "assets/images/grazie/os_simo_and_co_a_serre.jpg",
    "assets/images/grazie/os_simo_and_co_al_lago.jpg",
    "assets/images/grazie/os_simo_e_famiglia.jpg",
    "assets/images/grazie/os_simo_leti_e_j.jpg"
  ]
  public ImageData3 = [
    "assets/images/grazie/vd_leti_cossu_e_ele.jpg",
    "assets/images/grazie/vd_leti_e_compa_uni.jpg",
    "assets/images/grazie/vd_leti_e_famiglia.jpg",
    "assets/images/grazie/vd_leti_ele_rovers.jpg",
    "assets/images/grazie/vd_leti_giuli.jpg"
  ]
  public ImageData4 = [
    "assets/images/grazie/vs_simo_edo.jpg",
    "assets/images/grazie/vs_simo_j_varo.jpg",
    "assets/images/grazie/vs_simo_maio_nicas.jpg",
    "assets/images/grazie/vs_simo_michi.jpg",
    "assets/images/grazie/vs_sursum.jpg"
  ]
  @ViewChild('carouselBL') public carouselBL: NgbCarousel;
  @ViewChild('carouselBR') public carouselBR: NgbCarousel;
  @ViewChild('carouselTL') public carouselTL: NgbCarousel;
  @ViewChild('carouselTR') public carouselTR: NgbCarousel;
  public pauseOnFocus = false;
  public pauseOnHover = false;
  public pauseOnIndicator = false;
  public paused = false;
  public showNavigationArrows = false;
  public showNavigationIndicators = false;
  public unpauseOnArrow = false;

  // #endregion Properties (15)

  // #region Constructors (1)

  constructor(config: NgbCarouselConfig, private route: ActivatedRoute) {
    config.interval = 7000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  // #endregion Constructors (1)

  // #region Public Methods (2)

  public ngAfterViewInit() {
    this.route.fragment.subscribe(f => {
      const element = document.querySelector("#" + f)
      if (element)
        element.scrollIntoView()})
    this.carouselTR.pause();
    this.carouselTL.pause();
    this.carouselBR.pause();
    this.carouselBL.pause();

    setTimeout(() => {
      this.carouselTR.cycle();
      console.log('TR reactivated');
    }, 1000);
    setTimeout(() => {
      this.carouselBL.cycle();
      console.log('BL reactivated');
    }, 2000);
    setTimeout(() => {
      this.carouselBR.cycle();
      console.log('BR reactivated');
    }, 5000);
    setTimeout(() => {
      this.carouselTL.cycle();
      console.log('TL reactivated');
    }, 6000);
  }

  public ngOnInit(): void {
  }

  // #endregion Public Methods (2)
}
