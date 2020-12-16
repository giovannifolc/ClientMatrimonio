import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-responsive-toolbar',
  templateUrl: './responsive-toolbar.component.html',
  styleUrls: ['./responsive-toolbar.component.scss']
})
export class ResponsiveToolbarComponent implements OnInit {

  menuItems: string[] = ['Home', 'RSVP & Info', 'Lista nozze', 'Un grande grazie'];
  navLinks = [
    {path: '/', label: 'Home'},
    {path: '/info', label: 'RSVP & Info'},
    {path: '/listanozze', label: 'Lista ssnozze'},
    {path: '/grazie'}

  ];
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }


}
