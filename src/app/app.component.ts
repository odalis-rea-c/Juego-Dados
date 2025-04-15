import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dados';

  dadoIzquierdo:string='/img/dice1.png';
  dadoDerecho:string='/img/dice1.png';

  numero1!:number;
  numero2!:number;

  tirarDados(){
    this.numero1 = Math.round(Math.random() * 6);
    this.numero2 = Math.round(Math.random() * 6);

    console.log(this.numero1)
    console.log(this.numero2)

  }
}
