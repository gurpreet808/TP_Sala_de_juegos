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
    this.logueado();
  }

  async logueado() {
    await this.servUsuario.waitForAuthState();
    if (this.servUsuario.logueado.value == false) {
      this.router.navigate(['/login']);
    } else {
      this.nom_usuario = " " + this.servUsuario.usuarioActual.email;
    }
  }
}
