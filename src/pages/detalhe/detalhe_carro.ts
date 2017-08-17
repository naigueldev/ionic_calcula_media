import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CompraPage } from '../compra/compra';

@Component({
  templateUrl: 'detalhe.html'
})
export class DetalhePage {

  public carro;
  public precoTotal;

  public acessorios = [
    {nome: 'Ar-Condicionado', valor: 1500},
    {nome: 'Direção Hidráulica', valor: 2300},
    {nome: 'Travas Elétricas', valor: 870}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.carro = this.navParams.get('carroSelecionado');
      this.precoTotal = this.carro.preco;
      console.log(this.carro.nome);
  }

  finaliza(){
      this.navCtrl.push(
        CompraPage,
        {
            carroSelecionado: this.carro,
            precoFinal: this.precoTotal
        });
  }

  atualizaTotal(acessorio, ligado){
      ligado ? 
        this.precoTotal += acessorio.valor : 
        this.precoTotal -= acessorio.valor;
  }
}