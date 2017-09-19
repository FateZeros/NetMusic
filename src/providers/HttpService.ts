/**
*  Http服务
*/
import { Injectable } from '@angular/core';
import {
	Http,
	Response,
	Headers,
	RequestOptions,
	URLSearchParams,
	RequestOptionsArgs,
	RequestMethod
} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable, TimeoutError } from "rxjs"
import { NativeService } from "./NativeService"
import { APP_SERVE_URL, REQUEST_TIMEOUT } from "./Constants"

@Injectable()
export class HttpService {
	constructor(public http: Http, private nativeService: NativeService) {

	}

	public request(url: string, options: RequestOptions): Observable<Response> {
		return Observable.create(observer => {
			this.nativeService.showLoading()
			console.log('%c 请求前 %c', 'color:blue', '', 'url', url, 'options', options)
			this.http.request(url, options).timeout(REQUEST_TIMEOUT).subscribe(res => {
				this.nativeService.hideLoading()
				observer.next(res)
			}, err => {
				this.requestFailed(url, options, err)
				observer.error(err)
			})
		})
	}

	/**
   * 处理请求失败事件
   * @param url
   * @param options
   * @param err
   */
  private requestFailed(url: string, options: RequestOptionsArgs, err: Response): void {
    
  }
}