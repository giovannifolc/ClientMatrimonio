import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grazie',
  templateUrl: './grazie.component.html',
  styleUrls: ['./grazie.component.css']
})
export class GrazieComponent implements OnInit {

  startIndex = 0
  ImageData1 = ["assets/images/background_home.jpg", "assets/images/montagne.png"]

  ImageData2 = ["assets/images/background_home.jpg", "assets/images/montagne.png"]

  ImageData3 = ["assets/images/background_home.jpg", "assets/images/montagne.png"]

  ImageData4 = ["assets/images/background_home.jpg", "assets/images/montagne.png"]


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
