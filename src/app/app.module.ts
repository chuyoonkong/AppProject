import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FlightsPage} from '../pages/flights/flights';
import {MaldivesPage} from '../pages/maldives/maldives';
import {LondonPage} from '../pages/london/london';
import {BerlinPage} from '../pages/berlin/berlin';
import {FrancePage} from '../pages/france/france';
import {TokyoPage} from '../pages/tokyo/tokyo';
import {ChinaPage} from '../pages/china/china';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FlightsPage,
    MaldivesPage,
    LondonPage,
    BerlinPage,
    FrancePage,
    TokyoPage,
    ChinaPage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FlightsPage,
    MaldivesPage,
    LondonPage,
    BerlinPage,
    FrancePage,
    TokyoPage,
    ChinaPage
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}

  ]
})
export class AppModule {}
