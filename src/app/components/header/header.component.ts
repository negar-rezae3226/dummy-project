import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/LocalStorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  loginButton: boolean = true;

  constructor(public router: Router, public localStorageService: LocalStorageService) { }
  ngOnInit(): void {

    this.localStorageService.getItem('token');

    let token:string = this.localStorageService.getValueInLocalStorage;

    if (token) {

      this.loginButton = false;

    }




  }

}
