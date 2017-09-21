/*
* 
*/
import { Injectable } from '@angular/core';
import { 
	ToastController, 
	LoadingController, 
	Platform, 
	Loading, 
	AlertController 
} from "ionic-angular"
import { REQUEST_TIMEOUT } from "./Constants"

export class NativeService {
	private loading: Loading;
	private loadingIsOpen: boolean = false;

	constructor(private loadingCtrl: LoadingController) {

	}

	/**
   * 统一调用此方法显示loading
   * @param content 显示的内容
   */
  showLoading(content: string = ''): void {
  	this.loading = this.loadingCtrl.create({
  		content: content
  	})
  	this.loading.present()
  	setTimeout(() => {
      this.loading.dismiss()
    }, REQUEST_TIMEOUT)
  }

  /**
   * 关闭loading
   */
  hideLoading(): void {
    this.loading.dismiss()
  }
}