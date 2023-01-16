// import { Component, OnInit } from '@angular/core';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table'
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.interface';
import { DataService } from 'src/app/services/data.service';
import { UsersService } from 'src/app/services/users.service';


export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}


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

//     let index = this.usersList.findIndex((user) => user.id == this.user?.id);

//     if (this._dataService.UpdateORAddUser == false) {
//       if (this.user) {
//         this.usersList[index] = this.user;
//       }
//     } else {
//       if (this.user) {
//         this.usersList.push(this.user);
//       }
//     }
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
//   trackByFunc(index: number, el: any) {
//     return el.id;
//   }


// }


export class UsersTableComponent {
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'userName'];
  displayedColumns: string[] = ['firstName', 'lastName', 'age', 'username', 'password', 'phone', 'email', 'detail'];
  // usersList: User[] = [];
  usersList: any;

  deleteProduct: User[] = [];
  element: any;
  searchUser: User[] = [];
  user?: User;
  // dataSource: MatTableDataSource<UserData>;
  dataSource: any ;
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  // @ViewChild(MatPaginator)
  // paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute,
    private _dataService: DataService
  ) {

    // const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit(): void {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
    this._dataService.sharedParam.subscribe((user) => {
      if (user) {
        this.user = user;
      }
    });

    this.userService.getAllUsers().subscribe((response) => {

      this.usersList = response;
      console.log(this.usersList);
      
      
      this.dataSource=new MatTableDataSource<User>(this.usersList)

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
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }



}



