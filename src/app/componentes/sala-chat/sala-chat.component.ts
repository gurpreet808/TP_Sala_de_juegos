import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
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
  @ViewChild('mensajes_container') mensajesContainer!: ElementRef;

  constructor(public servMensaje: MensajeService, public servUsuario: UsuarioService) {
    this.servMensaje.getAll().subscribe(
      (msj: Mensaje[]) => {
        for (let x = 0; x < msj.length; x++) {
          msj[x].fecha = new Date((msj[x].fecha as any)['seconds'] * 1000);
        }

        this.mensajes = msj;
        //console.log(this.mensajes);
        this.scrollDown();
      }
    );
  }

  enviarMensaje() {
    if (this.servUsuario.usuarioActual) {
      this.mensaje.fecha = new Date();
      this.mensaje.nombre = this.servUsuario.usuarioActual.email;
      this.servMensaje.create(this.mensaje).then(
        (rdo: any) => {
          this.mensaje.mensaje = '';
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }

  async scrollDown() {
    const container = this.mensajesContainer.nativeElement;
    await new Promise(resolve => setTimeout(resolve, 1000));
    container.scroll({
      top: container.scrollHeight,
      behavior: 'smooth'
    });
  }

}
