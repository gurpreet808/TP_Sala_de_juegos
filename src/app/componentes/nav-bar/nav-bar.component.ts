import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

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
    },
    {
      label: 'Juegos',
      icon: 'fas fa-gamepad',
      items: [
        {
          label: 'Ahorcado',
          routerLink: '/ahorcado'
        },
        {
          label: 'Mayor o Menor',
          routerLink: '/mayor-menor'
        },
      ]
    },
    {
      label: 'Sala de Chat',
      icon: 'far fa-comments',
      routerLink: '/sala-chat'
    }
  ];

  constructor(public servUsuario: UsuarioService, private router: Router) { }

  Desloguear() {
    this.servUsuario.LogOut();
    this.router.navigateByUrl('/login');
  }
}
