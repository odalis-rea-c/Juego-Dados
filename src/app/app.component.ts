import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dados';

  dadoIzquierdo:string='/img/dice1.png';
  dadoDerecho:string='/img/dice4.png';

  numero1:number = 1;
  numero2:number = 2;

  tirarDados(){
    this.numero1 = Math.round(Math.random() * 5) + 1;
    this.numero2 = Math.round(Math.random() * 5) + 1;

    this.dadoIzquierdo = '/img/dice' + this.numero1 + '.png';
    this.dadoDerecho = '/img/dice' + this.numero2 + '.png';

    console.log(this.numero1)
    console.log(this.numero2)

  }
}
