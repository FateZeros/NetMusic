import { Component } from '@angular/core';
import { Injectable } from "@angular/core";

import { Http } from "@angular/http";

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { NativeService } from '../../providers/NativeService';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

@Injectable()
export class HomePage {
  //是否正在搜索 
  private isSearch: boolean = false
  searchQuery: String = ''
  // banner图片列表
  public bannerList: Observable<any>
  // 推荐歌单
  public introSongList: Observable<any>

  constructor(public http: Http, public nativeService: NativeService) {
    this.getBannerList()
    this.getIntroSongList()
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

  /*
  * 获取banner列表
  */
  getBannerList () {
    this.http.get('/api/banner').map(res => res.json()).subscribe(
      data => {
        this.bannerList = data.banners
      },
      err => {
        this.nativeService.showTopToast('获取banner，网络错误')
      }
    )
  }

  /*
  * 获取推荐歌单
  */
  getIntroSongList () {
    this.http.get('/api/personalized').map(res => res.json()).subscribe(
      data => {
        this.introSongList = data.result
      },
      err => {
        this.nativeService.showTopToast('推荐歌单，网络错误')
      }
    )
  }
}
