import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from "jquery";

@Component({
  selector: 'app-responsive-toolbar',
  templateUrl: './responsive-toolbar.component.html',
  styleUrls: ['./responsive-toolbar.component.scss']
})
export class ResponsiveToolbarComponent implements OnInit, AfterViewInit {
  // #region Properties (2)

  public menuItems: string[] = ['Home', 'RSVP & Info', 'Lista nozze', 'Grazie'];
  public navLinks = [
    { path: '/', label: 'Home' },
    { path: '/info', label: 'RSVP & Info' },
    { path: '/listanozze', label: 'Lista Nozze' },
    { path: '/grazie', label: 'Grazie' }

  ];

  // #endregion Properties (2)

  // #region Constructors (1)

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  // #endregion Constructors (1)

  // #region Public Methods (2)

  public ngAfterViewInit() {
    $('#openNav').on('click', function () {
      $('#myNav').css("width", "100vw");
    });

    $('#closeNav').on('click', function () {
      $('#myNav').css("width", "0%");
    });
  }

  public ngOnInit(): void {
  }

  // #endregion Public Methods (2)
}
