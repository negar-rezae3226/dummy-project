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

  deleteUser(userId: number) {
    // return fetch(this.apiUrl + 'users/' + `${userId}`, {
    //   method: "DELETE",
    // })

    return this.http.delete<any>(this.apiUrl + 'users/' + `${userId}`);


  }

  searchUsers(inputValue: any) {

    return this.http.get<any>(this.apiUrl + `users/search?q=${inputValue}`).pipe(
      map(items=>items.users )
    );
  }

  getSingleUser(userId: number) {

    return this.http.get<any>(this.apiUrl + `users/${userId}`);
  }

  editUser(userId: number, user: User) {

    return this.http.put(this.apiUrl + `users/${userId}` , user, {observe: 'response'})

  }

  addNewUser(user: User) {

    return this.http.post(this.apiUrl + 'users/add', user, {
      observe: 'response',
    });

  }



}
