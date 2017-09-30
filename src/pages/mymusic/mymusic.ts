import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-mymusic',
  templateUrl: 'mymusic.html'
})
export class MymusicPage {

  constructor(public navCtrl: NavController) {

  }

  // 下拉刷新页面
  homeRefresh(refresher) {
    setTimeout(() => {
      refresher.complete()
    }, 1500)    
  }

}
