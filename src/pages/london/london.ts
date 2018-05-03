import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MailingPage} from './../mailing/mailing';

@Component({
  selector: 'page-london',
  templateUrl: 'london.html',
})
export class LondonPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LondonPage');
  }

  goTo()
  {
    this.navCtrl.push(MailingPage);

  }
}
