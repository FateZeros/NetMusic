import { Component } from '@angular/core';
import { Injectable } from "@angular/core";

import { Response, Http } from "@angular/http";
import { HttpService } from "../../providers/HttpService";

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

@Injectable()
export class HomePage {
  //是否正在搜索 
  private isSearch: boolean = false
  searchQuery: String = ''
  //bannerList
  public bannerList: Observable<any>

  constructor(public http: Http, public httpService: HttpService) {
    this.http.get('/api/banner').map(res => res.json()).subscribe(data => {
      this.bannerList = data.banners
    })
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
