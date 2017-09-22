/**
*  Http服务
*/
import { Injectable } from '@angular/core'
import {
	Http,
	Response,
	RequestOptions,
	RequestOptionsArgs,
	RequestMethod
} from '@angular/http'
import 'rxjs/add/operator/map'

import { Observable } from "rxjs"
// import { NativeService } from "./NativeService"
import { APP_SERVE_URL, REQUEST_TIMEOUT } from "./Constants"

@Injectable()
export class HttpService {
	constructor(public http: Http) {

	}

	public request(url: string, options: RequestOptionsArgs): Observable<Response> {
		url = APP_SERVE_URL + url 
		return Observable.create(observer => {
			console.log('%c 请求前 %c', 'color:blue', '', 'url', url, 'options', options)
			this.http.request(url, options).timeout(REQUEST_TIMEOUT).subscribe(res => {
				observer.onNext(res)
			}, err => {
				// this.requestFailed(url, options, err)
				observer.onError(err)
			})
		})
		// return this.http.get(url)
	}

	public get(url: string, paramMap: any = null): Observable<Response> {
		return this.request(url, new RequestOptions({
			method: RequestMethod.Get,
			search: paramMap
		}))
	}
}