import { Injectable, inject } from '@angular/core';
import { Auth, UserCredential, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from '@angular/fire/auth';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  logueado: boolean = false;

  constructor(private auth: Auth) {
    this.auth.onAuthStateChanged(
      (user) => {
        if (user) {
          this.logueado = true;
        } else {
          this.logueado = false;
        }
      }
    );
  }

  async LogInEmail(email: string, password: string) {
    await signInWithEmailAndPassword(this.auth, email, password).then(
      (datos) => {
        //console.log(datos);
        return Promise.resolve(datos);
      }
    ).catch(
      (error) => {
        //console.log(error.code);
        throw new Error(this.errorParser(error.code));
      }
    );
  }

  async LogOut() {
    this.logueado = false;
    return this.auth.signOut();
  }

  async RegistrarEmail(email: string, password: string) {
    await createUserWithEmailAndPassword(this.auth, email, password).then(
      (datos) => {
        //console.log(datos);
        return Promise.resolve(datos);
      }
    ).catch(
      (error) => {
        //console.log(error.code);
        throw new Error(this.errorParser(error.code));
      }
    );
  }

  async OlvideClave(email: string) {
    await sendPasswordResetEmail(this.auth, email).then(
      (datos) => {
        //console.log(datos);
        return Promise.resolve(datos);
      }
    ).catch(
      (error) => {
        //console.log(error.code);
        throw new Error(this.errorParser(error.code));
      }
    );
  }

  errorParser(error: string) {
    switch (error) {
      case "auth/wrong-password":
        return "Clave incorrecta";
      case "auth/user-not-found":
        return "No se encontró ese mail";
      case "auth/invalid-email":
        return "El mail ingresado no es válido";
      case "auth/email-already-in-use":
        return "El mail ingresado ya está en uso";
      case "auth/weak-password":
        return "La clave debe tener al menos 6 caracteres";
      case "auth/too-many-requests":
        return "Demasiados intentos fallidos. Intente más tarde";
      case "auth/network-request-failed":
        return "Error de conexión. Intente más tarde";
      case "auth/invalid-login-credentials":
        return "Revise si su mail y contraseña son correctos";
      case "auth/missing-password":
        return "Debe ingresar una clave";
      case "auth/missing-email":
        return "Debe ingresar un mail";

      default:
        return `Error desconocido. (${error})`;
    }
  }

}
