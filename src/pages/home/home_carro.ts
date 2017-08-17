import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { DetalhePage } from '../detalhe/detalhe';
//typescript

@Component({
  selector: 'page-home',//seletor do sass
  templateUrl: 'home.html'//a visão que o componente tem
})
export class HomePage {

  public carros;
  public http;

  //injeção de dependência
  constructor(public navCtrl: NavController, private _http: Http) {
      this.http = _http;
      /*this.carros = [
          {nome: 'Chevette Tubarão', ano: 1979, preco: 4500},
          {nome: 'Fiesta Hatch', ano: 2001, preco: 11100},
          {nome: 'Tempra Turbo', ano: 2003, preco: 5300},
          {nome: 'Monza', ano: 1990, preco: 7200},
          {nome: 'Marea', ano: 1998, preco: 2100},
          {nome: 'Gurgel', ano: 1965, preco: 1400},
          {nome: 'Jipe Willis', ano: 1969, preco: 41000},
          {nome: 'Opalla 6 Caneco', ano: 1981, preco: 6100}
      ];*/

      //get é um dos 9 métodos do protocolo HTTP
      this.http
        .get("http://demo7824651.mockable.io/carros")
        .map(res => res.json())//mapeia o retorno para JSON
        .toPromise() //promise: promessa - eu prometo que quando baixar os dados eu faço xyz
        .then(carros => this.carros = carros); //arrows function JS
  }

  seleciona(carro){
    this.navCtrl.push(
      DetalhePage, 
      {
        carroSelecionado: carro
      }
    );
  }
}