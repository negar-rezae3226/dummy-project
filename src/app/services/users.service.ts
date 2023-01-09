import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {



  readonly apiUrl: string = "https://dummyjson.com/";


  constructor(private http: HttpClient) { }

  getAllUsers() {

    return this.http.get<any>(this.apiUrl + 'users').pipe(
      map(items=>items.users )
    );
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
        age: user.age,

      })
    })
      .then(res => res.json())
      .then(console.log);
  }

  searchUsers(inputValue: any) {

    return this.http.get<any>(this.apiUrl + `users/search?q=${inputValue}`).pipe(
      map(items=>items.users )
    );

  }

  getSingleUser(userId: number) {

    return fetch(this.apiUrl + `users/${userId}`)
    // return this.http.get<any>(this.apiUrl + `users/${userId}`).pipe(
    //   map(items=>items.users )
    // );

  }

  editUser(userId: number, user: User) {
    return fetch(this.apiUrl + `users/${userId}`, {
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
