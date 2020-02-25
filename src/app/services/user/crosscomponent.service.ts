import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrosscomponentService {

  public name:string;
  public data:any;

  constructor() {
    console.log("service intialized")
  }

  public setName(name:string){
    this.name=name;
  }

  public setUserData(data:any){
    this.data=data;
  }

}
