import { Component, OnInit, inject } from '@angular/core';
import { Mensaje } from 'src/app/clases/mensaje';
import { MensajeService } from 'src/app/servicios/mensaje.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-sala-chat',
  //standalone: true,
  templateUrl: './sala-chat.component.html',
  styleUrls: ['./sala-chat.component.scss']
})
export class SalaChatComponent {
  mensajes: Mensaje[] = [];
  mensaje: Mensaje = {
    id: '',
    nombre: '',
    mensaje: '',
    fecha: new Date()
  };

  constructor(public servMensaje: MensajeService, public servUsuario: UsuarioService) {
    
  }

  enviarMensaje() {
    this.mensaje.fecha = new Date();
    this.mensaje.nombre = this.servUsuario.usuarioActual.email;
    this.servMensaje.create(this.mensaje);
    this.mensaje.mensaje = '';
  }

}
