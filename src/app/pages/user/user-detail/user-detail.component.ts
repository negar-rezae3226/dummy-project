import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent {
  users: User[] = [];
  usersList: User[] = [];
  userId: any = {};
  selectUser: any = {};

  constructor(private active: ActivatedRoute,private UsersService: UsersService) {}

  ngOnInit(): void {
    // this.userId = this.active.params.subscribe(param => console.log(param))
    this.userId = +this.active.snapshot.params['id'];
    // console.log(this.userId);

    this.UsersService.getAllUsers().subscribe
      // .then((res) => res.json())
      // .then((json) => {
      //   this.usersList = json.users;
      //   console.log(this.usersList);
      // });
    setTimeout(() => {
      this.selectUser = this.usersList.find((user) => user.id === this.userId);
      console.log(this.selectUser);
    }, 3000);
  }
}
