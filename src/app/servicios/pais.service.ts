import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Pais } from '../clases/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  paises: Pais[] = [];
  urlServidor = "https://restcountries.com/v3.1/all";

  constructor(public _miHttp: HttpClient) {

  }

  GET(path: string): Promise<any> {
    return firstValueFrom(this._miHttp.get(this.urlServidor + path));
  }

  async CargarPaises(): Promise<Pais[]> {
    await this.GET("").then(
      (data) => {
        for (let i = 0; i < data.length; i++) {
          let pais = data[i];
          this.paises.push({
            nombre: pais.translations.spa.common,
            url_foto: pais.flags.svg
          });
        }
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    ).finally(
      () => {
        console.log("Carga de paises finalizada");
      }
    );

    return this.paises;
  }

}