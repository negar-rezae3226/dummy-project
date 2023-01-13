import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.interface';
import { DataService } from 'src/app/services/data.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit {
  usersList: User[] = [];
  deleteProduct: User[] = [];
  element: any;
  searchUser: User[] = [];
  user?: User;

  constructor(
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute,
    private _dataService: DataService
  ) {}

  ngOnInit(): void {
    this._dataService.sharedParam.subscribe((user) => {
      if (user) {
        this.user = user;
      }
    });

    this.userService.getAllUsers().subscribe((response: User[]) => {
      this.usersList = response;

      let index = this.usersList.findIndex((user) => user.id == this.user?.id);

      if (this._dataService.UpdateORAddUser == false) {
        if (this.user) {
          this.usersList[index] = this.user;
        }
      } else {
        if (this.user) {
          this.usersList.push(this.user);
        }
      }
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
    this.userService.searchUsers(e).subscribe((response: User[]) => {
      this.usersList = response;
    });
  }
  trackByFunc(index: number, el: any) {
    return el.id;
  }
}
