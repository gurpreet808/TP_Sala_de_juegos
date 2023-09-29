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
    }
  ];

  constructor(public servUsuario: UsuarioService, private router: Router) { }

  Desloguear() {
    this.servUsuario.LogOut();
    this.router.navigateByUrl('/login');
  }
}
