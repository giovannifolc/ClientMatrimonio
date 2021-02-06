import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from "jquery";

@Component({
  selector: 'app-responsive-toolbar',
  templateUrl: './responsive-toolbar.component.html',
  styleUrls: ['./responsive-toolbar.component.scss']
})
export class ResponsiveToolbarComponent implements OnInit, AfterViewInit {

  menuItems: string[] = ['Home', 'RSVP & Info', 'Lista nozze', 'Grazie'];
  navLinks = [
    { path: '/', label: 'Home' },
    { path: '/info', label: 'RSVP & Info' },
    { path: '/listanozze', label: 'Lista Nozze' },
    { path: '/grazie', label: 'Grazie' }

  ];
  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngAfterViewInit() {
    $('#openNav').on('click', function () {
      $('#myNav').css("width", "100vw");
    });

    $('#closeNav').on('click', function () {
      $('#myNav').css("width", "0%");
    });
  }

  ngOnInit(): void {

  }

}
