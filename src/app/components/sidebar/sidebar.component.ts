import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/LocalStorage.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
deleteLogOutButton:boolean=false;

constructor(private localStorage:LocalStorageService,private router:Router){}

  deleteLocalStorage(){

    this.localStorage.deleteData('token');
    this.deleteLogOutButton=true;
    this.router.navigate(['/login']);
    
  }
}
