import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-friend',
  templateUrl: 'friend.html'
})
export class FriendPage {
  

  constructor() {

  }
 
  // 下拉刷新页面
  homeRefresh(refresher) {
    setTimeout(() => {
      refresher.complete()
    }, 1500)    
  }
}
