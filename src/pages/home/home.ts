import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { MediaPage } from '../media/media';
//typescript

@Component({
  selector: 'page-home',//seletor do sass
  templateUrl: 'home.html'//a visão que o componente tem
})
export class HomePage {

  public nota1;
  public nota2;
  public nota3;
  public mediaFinal;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
      
  }


  atualizaTotal(nota1,nota2,nota3){
    this.navCtrl.push(
        MediaPage,
        {
            nota1: nota1,
            nota2: nota2,
            nota3: nota3

        });
    console.log("nota 01 = "+ nota1);
    console.log("nota 02 = "+ nota2);
    console.log("nota 03 = "+ nota3);
  }
}