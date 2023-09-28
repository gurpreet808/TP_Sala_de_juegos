import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  items = [
    {
      label: 'Home',
      icon: 'fa-solid fa-house',
      routerLink: '/'
    },
    {
      label: 'Quién Soy',
      icon: 'fa-regular fa-lightbulb',
      routerLink: '/quien-soy'
    }
  ];

}
