import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';

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

  deleteUser(userId: string) {
    return fetch(this.apiUrl + 'users/' + `${userId}`, {
      method: "DELETE",
    })
  }

  addNewUser(user: User) {
    return fetch(this.apiUrl + 'users/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        phone: user.phone,
        password: user.password,
        email: user.email,
        gender: user.gender,
        /* other user data */
      })
    })
      .then(res => res.json())
      .then(console.log);
  }

  searchUsers(inputValue: any) {
    return fetch(this.apiUrl + `users/search?q=${inputValue}`);
  }

  editUser(userId: string, user: User) {
    fetch(this.apiUrl + `users/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        phone: user.phone,
        password: user.password,
        email: user.email,
        gender: user.gender,
      })
    })
      .then(res => res.json())
      .then(console.log);
  }


}
