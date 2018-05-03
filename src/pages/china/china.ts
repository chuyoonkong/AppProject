import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MailingPage} from './../mailing/mailing';

@Component({
  selector: 'page-china',
  templateUrl: 'china.html',
})
export class ChinaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChinaPage');
  }

  goTo()
  {
    this.navCtrl.push(MailingPage);

  }
}
