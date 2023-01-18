import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  emptyLocalStorage: boolean = true;
  getValueInLocalStorage:any;

  constructor() { }

  public saveData(key: string, value: string) {

    localStorage.setItem(key, value);

    this.emptyLocalStorage = false;

  }

  public deleteData(key: string) {

    localStorage.removeItem(key);

  }

  public getItem(key: string){
    
    this.getValueInLocalStorage = localStorage.getItem(key);

    
  }



}
