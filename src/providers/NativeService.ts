/*
* 
*/
import { Injectable } from '@angular/core';
import { 
	LoadingController, 
	Loading, 
} from "ionic-angular"
import { REQUEST_TIMEOUT } from "./Constants"

@Injectable()
export class NativeService {
	private loading: Loading;

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