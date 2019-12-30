import {EventosProvider} from './../../providers/eventos/eventos';
import { Component } from '@angular/core';
import { IonicPage, NavController, IonicPage, NavParams, ToastController } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  eventos: any[];

  
  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private eventoProvider: EventosProvider) {


  }

  ionViewDidEnter(){

  	this.eventos = [];
  	this.getAllEventos();
  	
  }

  
  getAllEventos(){

  	this.eventoProvider.getAllEventos()
  		.then((result: any) => {

        
        for (var i = 0; i < result.data.length; i++) {
          
          var evento = result.data[i];
          this.eventos.push(evento);

        }
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao listar os eventos. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();


     })
  }

  getEventos() {
    setTimeout(() => {
      this.getAllEventos();
    }, 500);
  }

  openEvento(id: number) {
    
    this.eventoProvider.get(id)
      .then((result: any) => {
        this.navCtrl.push('AboutPage', { evento: result.data });
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao recuperar o evento. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
 
  }

}
