import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../clases/usuario';

@Pipe({
  name: 'autorPropio'
})
export class AutorPropioPipe implements PipeTransform {

  transform(nombre: string, usuario: Usuario): unknown {
    if (nombre == usuario.email) {
      return 'Tú';
    }

    return nombre;
  }

}
