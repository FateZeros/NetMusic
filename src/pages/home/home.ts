import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  //是否正在搜索 
  private isSearch: boolean = false
  searchQuery: String = ''

  constructor(public navCtrl: NavController) {

  }

  // searchBar焦点事件
  searchBarFocus () {
    this.isSearch = true
  }

  // searchBar失去焦点事件
  searchBarBlur () {
    this.isSearch = false
  }

  // searchBar输入
  onSearchInput (ev: any) {

  }

  onSearchCancel () {
    this.isSearch = false
  }

}
