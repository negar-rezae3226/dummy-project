// import { Component, OnInit } from '@angular/core';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table'
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.interface';
import { DataService } from 'src/app/services/data.service';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
// export class UsersTableComponent implements OnInit {
// usersList: User[] = [];
// deleteProduct: User[] = [];
// element: any;
// searchUser: User[] = [];
// user?: User;


// constructor(
//   private userService: UsersService,
//   private router: Router,
//   private route: ActivatedRoute,
//   private _dataService: DataService
// ) {}

// ngOnInit(): void {
//   this._dataService.sharedParam.subscribe((user) => {
//     if (user) {
//       this.user = user;
//     }
//   });

//   this.userService.getAllUsers().subscribe((response) => {



//     this.usersList = response;

// let index = this.usersList.findIndex((user) => user.id == this.user?.id);

// if (this._dataService.UpdateORAddUser == false) {
//   if (this.user) {
//     this.usersList[index] = this.user;
//   }
// } else {
//   if (this.user) {
//     this.usersList.push(this.user);
//   }
// }
//   });



//   }



// OnDeleteUser(user: any) {
//   this.element = document.getElementById(user.id) as HTMLElement;
//   this.element.parentElement.removeChild(this.element);
// }

// onSearchUser(e: string) {
//   this.userService.searchUsers(e).subscribe((response: User[]) => {
//     this.usersList = response;
//   });
// }



// }


export class UsersTableComponent {

  @ViewChild('teams') teams!: ElementRef;
  displayedColumns: string[] = ['firstName', 'lastName', 'age', 'username', 'password', 'phone', 'email', 'detail'];
  usersList: any;
  deleteProduct: User[] = [];
  element: any;
  searchUser: User[] = [];
  user?: User;
  dataSource: any;
  defaultLimit: number = 5;
  addLimit: number = 5;

  defaultSkip: number = 0;



  @ViewChild(MatPaginator) paginator!: MatPaginator;


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
    this.usersFunc();
  }



  usersFunc() {
    this.userService.limitAndSkipUsers(this.defaultLimit, this.defaultSkip).subscribe((response) => {

      this.usersList = response;

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

  skipUsers() {

    this.defaultSkip = this.defaultSkip + this.addLimit;
    this.usersFunc();

  }
  onSelected(): void {
    
    this.addLimit = this.teams.nativeElement.value;
    console.log(this.addLimit);
    
    // console.log(this.defaultLimit);

  }



}



