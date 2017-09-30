import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html'
})

export class MinePage {

  constructor(public navCtrl: NavController) {

  }

  // 下拉刷新页面
  homeRefresh(refresher) {
    setTimeout(() => {
      refresher.complete()
    }, 1500)    
  }

}
