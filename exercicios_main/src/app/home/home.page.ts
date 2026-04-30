import { Component } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  msn_ex1: string = ''; // MENSAGEM EXERCÍCIO 1
  msn_ex2: string = ''; // MENSAGEM EXERCÍCIO 2
  constructor() {}
  alertButtons = ['OK'];

  // EXERCÍCIO 1:

  conta: string = '';
  Range_1 = 0;

  ex1(event:RangeCustomEvent){
    this.Range_1 = parseInt(event.detail.value.toString());
  }

  Calcular_Gorjeta(){
    const valorConta = parseFloat(this.conta);
    if(isNaN(valorConta) || valorConta < 0){
      this.msn_ex1 = "Por favor, insira um número inteiro positivo.";
      return;
    }
    else{
      const range = this.Range_1;
      const total = valorConta * (1+range/100);
      const gorjeta = total - valorConta;

      this.msn_ex1 = `Valor total: ${total.toFixed(2)} | Gorjeta: ${gorjeta.toFixed(2)}`;
    }
  }

  // EXERCÍCIO 2:

  Range_2 = 1;
  Range_2_res = 0;

  medida1: string = '';
  medida2: string = '';

  // Mapas de conversão:
  paraMetro: any = {
    km: 1000,
    hm: 100,
    dam: 10,
    m: 1,
    dm: 0.1,
    cm: 0.01,
    mm: 0.001
  };

  deMetro: any = {
    miles: 1 / 1609.34,
    ft: 3.28084,
    in: 39.3701,
  };

  ex2(event: RangeCustomEvent) {
    this.Range_2 = Number(event.detail.value);
    this.calcularConversao();
  }

  calcularConversao() {
    if (!this.medida1 || !this.medida2) {
      this.Range_2_res = 0;
      return;
    }

    const valorEmMetros = this.Range_2 * this.paraMetro[this.medida1]; // CALCULAR TUDO PRA METRO
    const resultado = valorEmMetros * this.deMetro[this.medida2];

    this.Range_2_res = Number(resultado.toFixed(5));
  }


}
