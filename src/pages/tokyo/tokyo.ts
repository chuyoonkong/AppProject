import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MailingPage} from './../mailing/mailing';

@Component({
  selector: 'page-tokyo',
  templateUrl: 'tokyo.html',
})
export class TokyoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TokyoPage');
  }

  goTo()
  {
    this.navCtrl.push(MailingPage);

  }
}
