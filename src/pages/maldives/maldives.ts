import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MailingPage} from './../mailing/mailing';
@Component({
  selector: 'page-maldives',
  templateUrl: 'maldives.html',
})
export class MaldivesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaldivesPage');
  }

  goTo()
  {
    this.navCtrl.push(MailingPage);

  }
}
