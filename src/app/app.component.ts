import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './servicios/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TP_Sala_de_juegos';
  appReady: boolean = false;

  constructor(public servUsuario: UsuarioService) {
  }

  ngOnInit(): void { }
}
