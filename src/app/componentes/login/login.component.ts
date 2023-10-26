import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Usuario } from 'src/app/clases/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = "";
  clave: string = "";

  jugadoresMock = [
    { mail: "jugador1@jugador1.com", clave: "jugador1" },
    { mail: "jugador2@jugador2.com", clave: "jugador2" },
    { mail: "jugador3@jugador3.com", clave: "jugador3" }
  ]

  constructor(public servUsuario: UsuarioService, private router: Router, public messageService: MessageService) {
    //console.log(servUsuario.logueado);
  }

  ngOnInit(): void {
  }

  Login() {
    //console.log("login");
    this.servUsuario.LogInEmail(this.email, this.clave).then(
      (res) => {
        //console.log(res);
        this.messageService.add({ severity: 'success', life: 10000, summary: 'Bienvenido', detail: "Iniciaste sesión" });
        this.router.navigate(['/']);
      }
    ).catch(
      (err) => {
        console.log(err.message);
        this.messageService.add({ severity: 'error', life: 10000, summary: 'Error', detail: err.message });
      }
    );
  }

  Registrarme() {
    this.router.navigate(['/registro']);
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

  LoginMock(mail: string, clave: string) {
    this.email = mail;
    this.clave = clave;
  }
}
