import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // readonly apiUrl: string = "https://dummyjson.com/auth/";
  readonly apiUrl: string = "https://dummyjson.com/";


  constructor() { }

  getAllUsers() {
    return fetch(this.apiUrl + 'users');
  }

  deleteUser(userId:string){
   return fetch(this.apiUrl +'users/'+`${userId}`, {
      method: "DELETE",
    })
  }
  

}
