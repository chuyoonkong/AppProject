import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MaldivesPage} from './../maldives/maldives';
import {LondonPage} from './../london/london';
import {BerlinPage} from './../berlin/berlin';
import {FrancePage} from './../france/france';
import {TokyoPage} from './../tokyo/tokyo';
import {ChinaPage} from './../china/china';

@Component({
  selector: 'page-flights',
  templateUrl: 'flights.html',
})
export class FlightsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlightsPage');
  }

  openMaldives()
  {
    this.navCtrl.push(MaldivesPage);
  }

  openLondon()
  {
    this.navCtrl.push(LondonPage);
  }

  openFrance()
  {
    this.navCtrl.push(FrancePage);
  }

    openBerlin()
  {
    this.navCtrl.push(BerlinPage);
  }

    openTokyo()
  {
    this.navCtrl.push(TokyoPage);
  }

    openChina()
  {
    this.navCtrl.push(ChinaPage);
  }
}
