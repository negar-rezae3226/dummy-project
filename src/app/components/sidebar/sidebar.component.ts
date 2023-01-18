import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/LocalStorage.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  deleteLogOutButton: boolean = false;
  username: any = '';

  constructor(private localStorage: LocalStorageService, private router: Router) { }

  deleteLocalStorage() {

    this.localStorage.deleteData('token');
    this.deleteLogOutButton = true;
    this.router.navigate(['/login']);

  }
  ngOnInit(): void {

    this.localStorage.getItem('username');
    this.username = this.localStorage.getValueInLocalStorage;
    console.log(this.username);

  }





}
