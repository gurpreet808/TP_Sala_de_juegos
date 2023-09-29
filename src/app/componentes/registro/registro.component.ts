import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  email: string = "";
  clave: string = "";
  clave2: string = "";

  constructor(public servUsuario: UsuarioService, private router: Router, public messageService: MessageService) {
    if (servUsuario.logueado == true) {
      this.router.navigate(['/']);
    }
  }

  Registrarme() {
    //console.log("regisrarme");

    if (this.clave != this.clave2) {
      this.messageService.add({ severity: 'error', life: 10000, summary: 'Error', detail: "Las contraseñas no coinciden" });
      return;
    }

    this.servUsuario.RegistrarEmail(this.email, this.clave).then(
      (res) => {
        //console.log(res);
        this.messageService.add({ severity: 'success', life: 10000, summary: 'Listo', detail: "Se creó tu cuenta con el correo: " + this.email + "." });
        this.router.navigate(['/']);
      }
    ).catch(
      (err) => {
        console.log(err.message);
        this.messageService.add({ severity: 'error', life: 10000, summary: 'Error', detail: err.message });
      }
    );

  }

  Login() {
    this.router.navigate(['/login']);
  }

  OlvideClave() {
    console.log("olvide clave");
    this.servUsuario.OlvideClave(this.email).then(
      (res) => {
        console.log(res);
        this.messageService.add({ severity: 'success', life: 10000, summary: 'Listo', detail: "Se envió un correo a " + this.email + " para que puedas recuperar tu contraseña. Revisa SPAM por las dudas." });
      }
    ).catch(
      (err) => {
        console.log(err);
        this.messageService.add({ severity: 'error', life: 10000, summary: 'Error', detail: err.message });
      }
    );
  }

}
