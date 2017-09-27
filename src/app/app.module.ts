import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MymusicPage } from '../pages/mymusic/mymusic';
import { FriendPage } from '../pages/friend/friend';
import { HomePage } from '../pages/home/home';
import { MinePage } from '../pages/mine/mine';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from "@angular/http";
import { HttpService } from "../providers/HttpService";
import { NativeService } from "../providers/NativeService";

import { filterPipe } from '../pipes/filterPipe';

@NgModule({
  declarations: [
    MyApp,
    MymusicPage,
    FriendPage,
    HomePage,
    MinePage,
    TabsPage,
    filterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MymusicPage,
    FriendPage,
    HomePage,
    MinePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: ErrorHandler, 
      useClass: IonicErrorHandler
    },
    HttpService,
    NativeService
  ]
})
export class AppModule {}
