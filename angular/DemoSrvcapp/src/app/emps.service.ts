import { Injectable } from '@angular/core';
import { IEmps } from "./emps";
import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpsService {
  private _url:string="/assets/data/emps.json";
  constructor(private http:HttpClient) { }
  /*getEmps(){
    return [{"eid":101,"ename":"aaaaa","salary":14000},
    {"eid":102,"ename":"qqqqq","salary":14000},
    {"eid":103,"ename":"wwwww","salary":14000},
    {"eid":104,"ename":"xxxxx","salary":14000},
    {"eid":105,"ename":"zzzzz","salary":14000},];
  }*/
  getEmps():Observable<IEmps[]>{
    return this.http.get<IEmps[]>(this._url);
  }
}
