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

  selectedId: number = 0;

  constructor(private userService: UsersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.userService.getAllUsers()
      .then((res) => res.json())
      .then((json) => {
        this.usersList = json.users;
        console.log(this.usersList);
      });

    this.selectedId = this.route.snapshot.params['id'];
  }
  onUserRedirect() {
    this.router.navigate(['users-management/create']);
  }

  OnDeleteUser(user:any) {

    this.element = document.getElementById(user.id) as HTMLElement;
    this.element.parentElement.removeChild(this.element);
  }
}
