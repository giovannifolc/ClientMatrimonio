import {Component, Input, OnInit} from '@angular/core';
import {Oggetto} from '../../models/oggetto.model';


@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  oggetti: Oggetto[];

  readDataAsUrl(immagine: any) {
    let imgSrc;
    const reader = new FileReader();
    reader.onload = (e) => imgSrc = e.target.result;
    reader.readAsDataURL(new Blob([immagine]));
  }
}
