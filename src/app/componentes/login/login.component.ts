import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  usuario: Usuario = new Usuario("", "");
  error: string = "";
  block_ui: boolean = false;

  constructor(private router: Router) {
    Usuario.TraerDatosLocalStorage();
    if (Usuario.usuarioLogueado != null) {
      this.router.navigate(['/']);
    }
  }

  login() {
    this.block_ui = true;
    this.error = "";
    //console.log("login form", this.usuario);

    try {
      if (this.usuario.nombre == "" || this.usuario.clave == "") {
        throw new Error("Debe completar el usuario y la clave");
      }

      if (Usuario.LogIn(this.usuario)) {
        this.error = "Usuario logueado correctamente. Será redirigido en 5 segundos...";

        let cuentaregresiva: number = 5;
        let miIntervalo = setInterval(() => {
          if (cuentaregresiva <= 0) {
            clearInterval(miIntervalo);
            this.router.navigateByUrl('/');
          } else {
            this.error = `Usuario logueado correctamente. Será redirigido en ${cuentaregresiva} segundos...`;
            cuentaregresiva--;
          }
        }, 1000); // Update the countdown every 1 second (1000 milliseconds)
      }
    } catch (error: any) {
      console.log(error.message);
      this.error = error.message;
      this.block_ui = false;
    }
  }
}
