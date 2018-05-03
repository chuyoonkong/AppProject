import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MailingPage} from './../mailing/mailing';

@Component({
  selector: 'page-berlin',
  templateUrl: 'berlin.html',
})
export class BerlinPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BerlinPage');
  }

  goTo()
  {
    this.navCtrl.push(MailingPage);

  }
}
