import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  registerUser(){
      let alert = this.alertCtrl.create({
      title: 'Success!',
      subTitle: 'Account created!',
      buttons: ['OK']
    });
    alert.present();
    console.log('Register user with', this.user.value, this.password.value);

  }
}
