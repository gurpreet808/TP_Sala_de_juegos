import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  nom_usuario: string = '';

  constructor(public servUsuario: UsuarioService, private router: Router) {
    if (servUsuario.logueado == false) {
      this.router.navigateByUrl('/login');
    } else {
      this.nom_usuario = " " + servUsuario.usuarioActual.email;
    }
  }

  desloguear() {
    this.servUsuario.LogOut();
    this.router.navigateByUrl('/login');
  }
}
