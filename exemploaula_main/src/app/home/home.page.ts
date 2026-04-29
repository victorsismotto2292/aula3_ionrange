import { Component } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}

  onIonChange(ev:RangeCustomEvent){
    this.valorRange = parseInt(ev.detail.value.toString());
  }

  valorRange = 0;

}
