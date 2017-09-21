import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-friend',
  templateUrl: 'friend.html'
})
export class FriendPage {
  private isSearch: boolean = false;
  searchQuery: String = '';

  constructor() {

  }

  searchInput (ev: any) {
    console.log('搜索')
  }

  searchCancel () {
    console.log('取消')
  }

  getItems(ev: any) {
    console.log(12)
  }

}
