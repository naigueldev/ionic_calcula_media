import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'media.html'
})
export class MediaPage {

    public nota1;
    public nota2;
    public nota3;
    public mediaFinal;


   constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.nota1 = this.navParams.get('nota1');
      this.nota2 = this.navParams.get('nota2');
      this.nota3 = this.navParams.get('nota3');
      this.mediaFinal = ( parseFloat(this.nota1) + parseFloat(this.nota2) + parseFloat(this.nota3)) / 3;
      this.mediaFinal = parseFloat(this.mediaFinal).toFixed( 2 );

      console.log("NOTA CONSTRUTOR 1 = "+this.nota1);
      console.log("NOTA  CONSTRUTOR 2 = "+this.nota2);
      console.log("NOTA  CONSTRUTOR 3 = "+this.nota3);
      console.log("mediaFinal = "+this.mediaFinal);
  }
  verificaMedia(mediaFinal){
    console.log("verificaMedia = " + mediaFinal);
    if(mediaFinal >= 5 && mediaFinal < 7){
      return "Exame";
    }else if(mediaFinal >= 7){
      return "Aprovado"
    }else{
      return "Reprovado"
    }
  }
  verificaCor(mediaFinal){
    if(mediaFinal >= 5 && mediaFinal < 7){
      console.log("amarelo");
      return "amarelo";
      
    }else if(mediaFinal >= 7){
      console.log("verde");
      return "verde";
      
    }else{
      console.log("vermelho");
      return "vermelho";
      
    }
  }

}