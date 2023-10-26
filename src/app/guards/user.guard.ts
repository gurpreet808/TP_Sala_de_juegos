import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { inject } from '@angular/core';
//import { UsuarioService } from '../servicios/usuario.service';
import { Auth, User } from '@angular/fire/auth';

export const userGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject(Router);
  const auth = inject(Auth);

  return new Promise<boolean>(
    (resolve, reject) => {
      auth.onAuthStateChanged(
        (user: User | null) => {
          if (user) {
            resolve(true);
          } else {
            console.log('User is not logged in');
            router.navigate(['/login']);
            resolve(false);
          }
        }
      );
    }
  );

};