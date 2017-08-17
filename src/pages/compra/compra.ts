import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-compra',
  templateUrl: 'compra.html',
})
export class CompraPage {

  public carro;
  public precoFinal;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.carro = this.navParams.get('carroSelecionado');
    this.precoFinal = this.navParams.get('precoFinal');
  }

}
