import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GlobalService {

    constructor(public _http: HTTP){
      this._http.setHeader(environment.url, 'Authorization', `Bearer ${ localStorage.getItem('token')}`);
    }

    public user = new BehaviorSubject<any>({});

    public postRequest(url:string, data:any){    
      return this._http.sendRequest(`${environment.url}/api/${url}`, {timeout: 200000, method: 'post', responseType: 'json', headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}, data})
    }

    public getRequest(url:string){
      return this._http.sendRequest(`${environment.url}/api/${url}`, {method: 'get', responseType: 'json', headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}})
    }

    public getRequestToken(url:string){
      return this._http.sendRequest(`${environment.url}/api/${url}`, {method: 'get', headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}})
    }
}