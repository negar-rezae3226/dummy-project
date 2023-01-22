import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { catchError, Observable } from 'rxjs';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class ResolverService implements Resolve<any> {
  id:any='';
  constructor(private userService: UsersService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    console.log('Called Get Product in resolver...', route);
    return this.userService.getSingleUser(this.id);
  }
}
