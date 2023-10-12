import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.scss']
})
export class MayorMenorComponent implements OnInit {
  mazoDeCartas: number[] = [];
  cartaActual: number | undefined;
  puntos: number = 0;
  cartasRestantes: number = 20;
  juegoTerminado: boolean = false;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.iniciarJuego();
  }

  iniciarJuego() {
    this.juegoTerminado = false;
    this.puntos = 0;
    this.mazoDeCartas = this.barajar(this.crearMazoDeCartas());
    this.mostrarSiguienteCarta();
  }

  crearMazoDeCartas(): number[] {
    return Array.from({ length: 20 }, (_, i) => i + 1);
  }

  barajar(mazo: number[]): number[] {
    for (let i = mazo.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [mazo[i], mazo[j]] = [mazo[j], mazo[i]];
    }
    return mazo;
  }

  mostrarSiguienteCarta() {
    if (this.mazoDeCartas.length > 0) {
      this.cartaActual = this.mazoDeCartas.pop();
    } else {
      this.messageService.add({ severity: 'warning', summary: 'Fin del juego', detail: 'Se han agotado las cartas en el mazo.' });
    }
    this.cartasRestantes = this.mazoDeCartas.length;
    this.juegoTerminado = this.mazoDeCartas.length === 0;
  }

  verificarAdivinanza(esMayor: boolean) {
    if (this.mazoDeCartas.length === 0) {
      this.juegoTerminado = true;
      this.messageService.add({ severity: 'warning', summary: 'Fin del juego', detail: 'Se han agotado las cartas en el mazo.' });
    } else {
      const siguienteCarta = this.mazoDeCartas[this.mazoDeCartas.length - 1];
      if (this.cartaActual !== undefined) {
        if ((esMayor && siguienteCarta > this.cartaActual) || (!esMayor && siguienteCarta < this.cartaActual)) {
          this.puntos++;
          this.messageService.add({ severity: 'success', summary: 'Adivinaste', detail: '¡Has acertado!' });
        } else {
          this.messageService.add({ severity: 'error', summary: 'Fallaste', detail: '¡No has acertado!' });
        }
      }

      this.mostrarSiguienteCarta();
    }
  }

  reiniciarJuego() {
    this.iniciarJuego();
  }
}