import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grazie',
  templateUrl: './grazie.component.html',
  styleUrls: ['./grazie.component.css']
})
export class GrazieComponent implements OnInit {

  startIndex = 0
  ImageData1 = [
    "assets/images/grazie/od_laurea_j.jpg",
    "assets/images/grazie/od_leti_e_compagni_liceo.jpg",
    "assets/images/grazie/od_leti_e_mitica_segre.jpg",
    "assets/images/grazie/od_leti_e_svizzere.jpg",
    "assets/images/grazie/od_leti_simo_e_franco.jpg"
  ]

  ImageData2 = [
    "assets/images/grazie/os_poli.jpg",
    "assets/images/grazie/os_simo_and_co_a_serre.jpg",
    "assets/images/grazie/os_simo_and_co_al_lago.jpg",
    "assets/images/grazie/os_simo_e_famiglia.jpg",
    "assets/images/grazie/os_simo_leti_e_j.jpg"
  ]

  ImageData3 = [
    "assets/images/grazie/vd_leti_cossu_e_ele.jpg",
    "assets/images/grazie/vd_leti_e_compa_uni.jpg",
    "assets/images/grazie/vd_leti_e_famiglia.jpg",
    "assets/images/grazie/vd_leti_ele_rovers.jpg",
    "assets/images/grazie/vd_leti_giuli.jpg"
  ]

  ImageData4 = [
    "assets/images/grazie/vs_simo_edo.jpg",
    "assets/images/grazie/vs_simo_j_varo.jpg",
    "assets/images/grazie/vs_simo_maio_nicas.jpg",
    "assets/images/grazie/vs_simo_michi.jpg",
    "assets/images/grazie/vs_sursum.jpg"
  ]

  constructor() { }

  ngOnInit(): void {
    this.Repeat();
  }

  Repeat() {
    setTimeout(() => {
      this.__FunctionSlide();
      this.Repeat();
    }, 2000);
  }

  __FunctionSlide() {
    const slides = Array.from(document.getElementsByClassName('mall-show-slide'));
    if (slides === []) {
      this.Repeat();
    }
    for (const x of slides) {
      const y = x as HTMLElement;
      y.style.display = 'none';
    }
    if (this.startIndex > slides.length - 1) {
      this.startIndex = 0;
      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    } else {

      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    }
  }
}
