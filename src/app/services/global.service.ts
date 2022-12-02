import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GlobalService {

    constructor(public _http: HttpClient){}

    public user = new BehaviorSubject<any>({});

    public postRequest(url:string, body:any){        
        return this._http.post(`${environment.url}/api/${url}`, body, {headers: {Authorization: 'Bearer '  + localStorage.getItem('token')}})
    }

    public getRequest(url:string){
      return this._http.get(`${environment.url}/api/${url}`, {headers: {Authorization: 'Bearer '  + localStorage.getItem('token')}})
    }

    public  getRequestPublic (url:string){
      return this._http.get(url);
    }
}