import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  evento: any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.evento = this.navParams.data.evento;
  }

}


