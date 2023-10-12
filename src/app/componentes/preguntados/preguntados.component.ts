import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Pais } from 'src/app/clases/pais';
import { PaisService } from 'src/app/servicios/pais.service';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.scss']
})
export class PreguntadosComponent implements OnInit {

  idPaisElegido: number = -1;
  opcionesPaises: number[] = [];
  juegoFinalizado: boolean = false;
  gano: boolean = false;

  constructor(public servPaises: PaisService, public messageService: MessageService) {
  }

  ngOnInit(): void {
    this.IniciarJuego();
  }

  async IniciarJuego() {
    this.juegoFinalizado = false;
    this.gano = false;
    await this.servPaises.CargarPaises().then(
      (paises: Pais[]) => {
        this.ElegirPaisAleatorio();
        this.ElegirOpcionesAleatorias(this.idPaisElegido);

        //console.log(this.servPaises.paises[this.idPaisElegido]);
        //console.log(this.opcionesPaises);
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    );
  }

  ElegirPaisAleatorio() {
    this.idPaisElegido = Math.floor(Math.random() * this.servPaises.paises.length);
  }

  ElegirOpcionesAleatorias(idPaisElegido: number) {
    this.opcionesPaises = [];
    let opciones = 3;
    while (opciones > 0) {
      let idPais = Math.floor(Math.random() * this.servPaises.paises.length);
      if (idPais != idPaisElegido && !this.opcionesPaises.includes(idPais)) {
        this.opcionesPaises.push(idPais);
        opciones--;
      }
    }
    this.opcionesPaises.push(idPaisElegido);
    this.opcionesPaises.sort(() => Math.random() - 0.5);
  }

  ElegirOpcion(idPais: number) {
    if (idPais == this.idPaisElegido) {
      this.gano = true;
      this.messageService.add({ severity: 'success', summary: 'Correcto', detail: 'Ganaste' });
    } else {
      this.gano = false;
      this.messageService.add({ severity: 'error', summary: 'Incorrecto', detail: 'Perdiste' });
    }

    this.juegoFinalizado = true;
  }

  ReiniciarJuego() {
    this.IniciarJuego();
  }
}
