import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  usersList: User[] = [];
  deleteProduct: User[] = [];
  element: any;
  searchUser: User[] = [];

  constructor(private userService: UsersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {



    this.userService.getAllUsers()
      .then((res) => res.json())
      .then((json) => {
        this.usersList = json.users;
        console.log(this.usersList);
      });


  }
  onUserRedirect() {
    this.router.navigate(['users-management/create']);
  }

  OnDeleteUser(user: any) {

    this.element = document.getElementById(user.id) as HTMLElement;
    this.element.parentElement.removeChild(this.element);
  }

  onSearchUser(e: string) {

    this.userService.searchUsers(e)
      .then((res) => res.json())
      .then((json) => {
        this.usersList = json.users;
        console.log(this.usersList);
      });
  }
  trackByFunc(index: number, el: any) {
    return el.id;
  }
}
