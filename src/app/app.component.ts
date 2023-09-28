import { Component } from '@angular/core';
import { UsuarioService } from './servicios/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TP_Sala_de_juegos';

  constructor(public servUsuario: UsuarioService){
    
  }
}
