import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { Injectable } from "@angular/core";

import { Http } from "@angular/http";

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { NativeService } from '../../providers/NativeService';
import { PlayingMusic } from '../playingMusic/playingMusic';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

@Injectable()
export class HomePage {
  // 当前日期
  public today: Date
  //是否正在搜索 
  public isSearch: boolean = false
  searchQuery: String = ''
  // banner图片列表
  public bannerList: Observable<any>
  // 推荐歌单
  public introSongList: Observable<any>
  // 独家放送
  public privateContent: Observable<any>
  // 推荐MV
  public introMvList: Observable<any>
  // 主播电台
  public djProgramList: Observable<any>

  constructor(
    public http: Http, 
    public navCtrl: NavController, 
    public appCtrl: App, 
    public nativeService: NativeService
  ) {
    this.today = new Date()
    this.getBannerList()
    this.getIntroSongList()
    this.getIntroMvList()
    this.getDjProgramList()
    this.getPrivateContent()
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
        data.result.forEach(item => {
          const playCountMM = Math.floor(item.playCount / 10000)
          const playCount = playCountMM > 10 ? `${playCountMM}万` : item.playCount
          return item.playCount = playCount
        })
        this.introSongList = data.result
      },
      err => {
        this.nativeService.showTopToast('推荐歌单，网络错误')
      }
    )
  }

  /**
   * 独家放送
  */
  getPrivateContent () {
    this.http.get('/api/personalized/privatecontent').map(res => res.json()).subscribe(
      data => {
        this.privateContent = data.result
      },
      err => {
        this.nativeService.showTopToast('独家放送，网络错误')
      }
    )
  }

  /**
   * 推荐MV
  */
  getIntroMvList () {
    this.http.get('/api/personalized/mv').map(res => res.json()).subscribe(
      data => {
        data.result.forEach(item => {
          const playCountMM = Math.floor(item.playCount / 10000)
          const playCount = playCountMM > 10 ? `${playCountMM}万` : item.playCount
          return item.playCount = playCount
        })
        this.introMvList = data.result
      },
      err => {
        this.nativeService.showTopToast('推荐MV，网络错误')
      }
    )
  }

  /**
   * 主播电台
  */
  getDjProgramList () {
    this.http.get('/api/personalized/djprogram').map(res => res.json()).subscribe(
      data => {
        this.djProgramList = data.result
      }
    )
  }

  /**
   * 跳转到 正在播放的音乐
   * 页面 不带footer
   */
  toPlayingMuisc () {
    // console.log(this.appCtrl.getRootNav())
    this.appCtrl.getRootNav().push(PlayingMusic)
    // this.appCtrl.getRootNavById('n4')
  }
}
