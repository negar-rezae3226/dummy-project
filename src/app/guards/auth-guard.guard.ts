import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/LocalStorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {


  constructor(private localStorage: LocalStorageService, private router: Router) { }

  ngOnInit(): void {




  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    this.localStorage.getItem('token');
    let token = this.localStorage.getValueInLocalStorage;

    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;

  }

}
