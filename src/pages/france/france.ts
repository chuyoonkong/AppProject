import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MailingPage} from './../mailing/mailing';

@Component({
  selector: 'page-france',
  templateUrl: 'france.html',
})
export class FrancePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FrancePage');
  }

  goTo()
  {
    this.navCtrl.push(MailingPage);

  }
}
