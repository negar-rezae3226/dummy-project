
import { Injectable } from '@angular/core';

import { Product } from '../models/product.interface';
import { Observable, map } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { LocalStorageService } from './LocalStorage.service';
import * as myGlobals from '../../global';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private http: HttpClient, private localStorage: LocalStorageService) { }


  getAllUsers():Observable<Product> {

    return this.http.get<any>(myGlobals.apiUrl + 'products').pipe(
      map(items => items.products)
    );
  }

  limitAndSkipUsers(limit:number , skip:number) {
    return this.http.get<any>(myGlobals.apiUrl + 'products?limit=' + `${limit}` + '&skip=' + `${skip}`,  {observe: "response"}).pipe(

    );
  }

  deleteUser(userId: number) {

    return this.http.delete<any>(myGlobals.apiUrl + 'products/' + `${userId}`);
  }

  searchUsers(inputValue: any) {
  
    return this.http.get<any>(myGlobals.apiUrl + `products/search?q=${inputValue}`).pipe(
      map(items => items.products)
    );
  }

  getSingleUser(userId: number) {

    return this.http.get<any>(myGlobals.apiUrl + `products/${userId}`);
  }

  editUser(userId: number, user: Product) {

    return this.http.put<any>(myGlobals.apiUrl + `products/${userId}`, user, {
      observe: "response"
    })

  }

  addNewUser(user: Product) {

    return this.http.post<any>(myGlobals.apiUrl + 'products/add', user, {
      observe: 'response'
    });

  }



}
