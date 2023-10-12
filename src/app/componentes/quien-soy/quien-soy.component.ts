import { Component } from '@angular/core';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.scss']
})
export class QuienSoyComponent {
  //url_foto: string = 'assets/img/foto.jpg';
  url_foto: string = "https://avatars.githubusercontent.com/u/17884026";
  nombre: string = 'Daniel Singh';
}
