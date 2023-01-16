import { Injectable } from '@angular/core';

import { User } from '../models/user.interface';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from './LocalStorage.service';
import * as myGlobals from '../../global';
@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private http: HttpClient, private localStorage: LocalStorageService) { }

  ngOnInit(): void {

  }


  getAllUsers():Observable<User> {

    return this.http.get<any>(myGlobals.apiUrl + 'users').pipe(
      map(items => items.users)
    );
  }

  deleteUser(userId: number) {

    return this.http.delete<any>(myGlobals.apiUrl + 'users/' + `${userId}`);
  }

  searchUsers(inputValue: any) {
  
    return this.http.get<any>(myGlobals.apiUrl + `users/search?q=${inputValue}`).pipe(
      map(items => items.users)
    );
  }

  getSingleUser(userId: number) {

    return this.http.get<any>(myGlobals.apiUrl + `users/${userId}`);
  }

  editUser(userId: number, user: User) {

    return this.http.put<any>(myGlobals.apiUrl + `users/${userId}`, user, {
      observe: "response"
    })

  }

  addNewUser(user: User) {

    return this.http.post<any>(myGlobals.apiUrl + 'users/add', user, {
      observe: 'response'
    });

  }



}
