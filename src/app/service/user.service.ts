import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getAllUsers()  {
    return fetch("https://dummyjson.com/users")
  }
  


  
}
