import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
// import { Storage } from '@ionic/storage';
// import { AgmCoreModule } from 'angular2-google-maps/core'; 
import { MyApp } from './app.component';
import { GamePage, MyTeamsPage, TeamDetailPage, TeamsPage, TournamentsPage, MapPage, StandingsPage, TeamHomePage } from '../pages/pages';
import {
  EliteApi
  // , UserSettings 
} from '../shared/shared';

@NgModule({
  declarations: [
    MyApp,
    GamePage,
    MapPage,
    StandingsPage,
    TeamHomePage,
    MyTeamsPage,
    TeamDetailPage,
    TeamsPage,
    TournamentsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule,
    BrowserModule
    // AgmCoreModule.forRoot({ apiKey: 'AIzaSyBbsOlMryAHu2ESwHHSwrDBIUU7fiENNoM' })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GamePage,
    MapPage,
    StandingsPage,
    TeamHomePage,
    MyTeamsPage,
    TeamDetailPage,
    TeamsPage,
    TournamentsPage
  ],
  providers: [
    // Storage,
    EliteApi
    // UserSettings
  ]
})
export class AppModule { }
