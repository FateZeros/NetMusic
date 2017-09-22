/*
* 
*/
import { Injectable } from '@angular/core';
import { 
  LoadingController, 
  ToastController,
	Loading, 
} from "ionic-angular";

import { REQUEST_TIMEOUT } from "./Constants";

@Injectable()
export class NativeService {
	private loading: Loading;

	constructor(private loadingCtrl: LoadingController, private toastCtrl: ToastController) {

  }
  
  /**
   *  显示Top Toast
   */
  showTopToast(message: string = ''): void {
    const toast = this.toastCtrl.create({
      message,
      duration: 3000,
      position: 'top'
    })
    toast.present()
  }

	/**
   * 统一调用此方法显示loading
   * @param content 显示的内容
   */
  showLoading(content: string = ''): void {
  	const loading = this.loadingCtrl.create({
      content,
      duration: 3000
  	})
  	loading.present()
  }

  /**
   * 关闭loading
   */
  hideLoading(): void {
    this.loading.dismiss()
  }
}