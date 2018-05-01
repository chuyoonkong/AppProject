import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FlightsPage} from './../flights/flights';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openHome()
  {
    this.navCtrl.push(HomePage)
  }

  openFlights()
  {
    this.navCtrl.push(FlightsPage)
  }

  login()
  {
  }
}
