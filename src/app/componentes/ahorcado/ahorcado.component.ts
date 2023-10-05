import { Component } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss']
})
export class AhorcadoComponent {
  letras: string[] = [];
  palabra_a_adivinar: string = '';
  intentos_restantes: number = 5;
  letras_adivinadas: string[] = [];
  palabra_oculta: string = '';
  finalizado: boolean = false;
  palabras: string[] = [
    'gato', 'perro', 'casa', 'coche',
  ];

  constructor() {
    this.ResetJuego();
  }

  ngOnInit(): void {
  }

  TecladoInit() {
    this.letras = 'abcdefghijklmnñopqrstuvwxyz'.toUpperCase().split('');
  }

  PalabraAlAzar() {
    this.palabra_a_adivinar = this.palabras[Math.floor(Math.random() * this.palabras.length)].toUpperCase();
    console.log(this.palabra_a_adivinar);

    this.palabra_oculta = '_'.repeat(this.palabra_a_adivinar.length);
  }

  ComprobarLetra(letra: string): boolean {
    if (this.palabra_a_adivinar.includes(letra)) {
      return true;
    }
    return false;
  }

  ElegirLetra(letra: string) {
    console.log(letra, this.ComprobarLetra(letra));
    
    this.letras.splice(this.letras.indexOf(letra), 1);

    if (this.ComprobarLetra(letra)) {
      this.letras_adivinadas.push(letra);
      this.ActualizarPalabraOculta();
    } else {
      this.intentos_restantes--;
      if (this.intentos_restantes == 0) {
        this.finalizado = true;
      }
    }
  }

  ActualizarPalabraOculta() {
    for (let x = 0; x < this.palabra_a_adivinar.length; x++) {
      if (this.letras_adivinadas.includes(this.palabra_a_adivinar[x])) {
        this.palabra_oculta = this.palabra_oculta.substr(0, x) + this.palabra_a_adivinar[x] + this.palabra_oculta.substr(x + 1);
      }
    }
  }

  ResetJuego() {
    this.intentos_restantes = 5;
    this.letras_adivinadas = [];
    this.palabra_oculta = '';
    this.finalizado = false;
    this.TecladoInit();
    this.PalabraAlAzar();
  }
}
