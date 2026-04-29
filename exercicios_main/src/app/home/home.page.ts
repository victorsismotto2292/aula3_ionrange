import { Component } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  msn_ex1: string = '';
  constructor() {}
  alertButtons = ['OK'];
  conta: string = '';
  valorRange = 0;

  onIonChange(event:RangeCustomEvent){
    this.valorRange = parseInt(event.detail.value.toString());
  }

  Calcular_Gorjeta(){
    const valorConta = parseFloat(this.conta);
    if(isNaN(valorConta) || valorConta < 0){
      this.msn_ex1 = "Por favor, insira um número inteiro positivo.";
      return;
    }
    else{
      const range = this.valorRange;
      const total = valorConta * (1+range/100);
      const gorjeta = total - valorConta;

      this.msn_ex1 = `Valor total: ${total.toFixed(2)} | Gorjeta: ${gorjeta.toFixed(2)}`;
    }
  }

}
