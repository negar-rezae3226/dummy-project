// import { Component, OnInit } from '@angular/core';
import {  Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from 'src/app/models/user.interface';
import { DataService } from 'src/app/services/data.service';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})

export class UsersTableComponent {

  usersList: any;
  deleteProduct: User[] = [];
  element: any;
  searchUser: User[] = [];
  user?: User;
  defaultLimit: number = 5;
  addLimit: number = 5;
  pageNumber: number = 1;
  defaultSkip: number = 0;
  allPage: number = 0;
  nextLoading: boolean = true;
  beforeLoading: boolean = true;
  loader: boolean = true;
  numbers: any = [
    { value: 5, viewValue: 5 },
    { value: 10, viewValue: 10 },
    { value: 20, viewValue: 20 },
  ];
  selectedNumber = this.numbers[0].value;

  constructor(
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute,
    private _dataService: DataService
  ) { }

  ngOnInit(): void {

    this._dataService.sharedParam.subscribe((user) => {
      if (user) {
        this.user = user;
      }
    });
    this.getUsersApi();
  }


  getUsersApi() {

    this.userService.limitAndSkipUsers(this.defaultLimit, this.defaultSkip)
      .subscribe((response) => {


        console.log(response.body.users);

        if (response.status == 200) {
          this.loader = false;
          this.nextLoading = false;
          this.beforeLoading = false;
        }

        this.allPage = (response.body.total) / this.defaultLimit;

        this.usersList = response.body.users;

        let index = this.usersList.findIndex((user: { id: number | undefined; }) => user.id == this.user?.id);

        if (this._dataService.UpdateORAddUser == false) {
          if (this.user) {
            this.usersList[index] = this.user;
          }
        }
        else {
          if (this.user) {
            this.usersList.push(this.user);
          }
        }


      });

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

  onUserRedirect() {
    this.router.navigate(['users-management/create']);
  }

  nextPage() {


    this.defaultSkip += this.addLimit;
    this.nextLoading = true;
    this.getUsersApi();
    this.pageNumber++;


  }

  beforePage() {

    this.defaultSkip = this.defaultSkip - this.addLimit;
    this.beforeLoading = true;
    this.getUsersApi();
    this.pageNumber--;


  }
  onSelected(value: Event): void {


    this.addLimit = +value;
    console.log(this.addLimit);

    this.defaultSkip = 0;

    this.defaultLimit = this.addLimit;
    this.pageNumber = 1;
    this.getUsersApi();



  }


}



