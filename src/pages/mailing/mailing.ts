import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-mailing',
  templateUrl: 'mailing.html',
})
export class MailingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MailingPage');
  }

  send() {
    let alert = this.alertCtrl.create({
      title: 'Succesful!',
      subTitle: 'Your email sent successfully!',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.popToRoot();
  }

  close(){
    this.navCtrl.popToRoot();
  }
}
