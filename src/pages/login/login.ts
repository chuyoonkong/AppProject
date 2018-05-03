import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SignupPage} from './../signup/signup';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login()
  {
      let alert = this.alertCtrl.create({
      title: 'Success!',
      subTitle: 'Welcome !',
      buttons: ['OK']
    });

    console.log('Sign in with', this.user.value,this.password.value);
  }

  goToSignUp(){
    this.navCtrl.push(SignupPage);

  }
  
}
