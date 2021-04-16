import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoSrvcService {

  constructor() { }
  getEmps(){
    return [
      {"eid":101,"ename":"souji","salary":15000},
      {"eid":102,"ename":"soumya","salary":14000},
      {"eid":103,"ename":"sruthi","salary":12000},
      {"eid":104,"ename":"swathi","salary":11000},
      {"eid":105,"ename":"suhasini","salary":10000},
    ];
  }
}
