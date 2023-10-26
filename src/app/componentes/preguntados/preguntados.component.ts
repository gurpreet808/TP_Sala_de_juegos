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
  rondaFinalizada: boolean = false;
  ganoRonda: boolean = false;
  rondas: number = 10;
  rondaActual: number = 0;
  puntaje: number = 0;

  constructor(public servPaises: PaisService, public messageService: MessageService) {
  }

  ngOnInit(): void {
    this.IniciarJuego();
  }

  async IniciarJuego() {
    this.rondaFinalizada = false;
    this.ganoRonda = false;
    this.rondaActual = 0;
    this.puntaje = 0;
    this.IniciarRonda();
  }

  async IniciarRonda(){
    if (this.rondaActual < this.rondas) {
      await this.servPaises.CargarPaises().then(
        (paises: Pais[]) => {
          this.ElegirPaisAleatorio();
          this.ElegirOpcionesAleatorias(this.idPaisElegido);
          this.rondaActual++;
          this.rondaFinalizada = false;
  
          //console.log(this.servPaises.paises[this.idPaisElegido]);
          //console.log(this.opcionesPaises);
          console.log(this.rondaActual);
        }
      ).catch(
        (error) => {
          console.log(error);
        }
      );
    } else {
      throw new Error('No hay más rondas');
    }
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
      this.puntaje++;
      this.ganoRonda = true;
      this.messageService.add({ severity: 'success', summary: 'Correcto', detail: 'Acertaste!' });
    } else {
      this.ganoRonda = false;
      this.messageService.add({ severity: 'error', summary: 'Incorrecto', detail: 'Fallaste!' });
    }

    this.rondaFinalizada = true;
  }

  ReiniciarJuego() {
    this.IniciarJuego();
  }
}
