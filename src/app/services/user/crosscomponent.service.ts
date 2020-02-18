import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrosscomponentService {

public name:string;

  constructor() {
  }

  public setName(name:string){
    this.name=name;
  }
}
