import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nom_usuario: string = '';

  constructor(public servUsuario: UsuarioService) {
  }

  ngOnInit(): void {
    if (this.servUsuario.usuarioActual) {
      this.nom_usuario = this.servUsuario.usuarioActual.email;
    }
  }

}
