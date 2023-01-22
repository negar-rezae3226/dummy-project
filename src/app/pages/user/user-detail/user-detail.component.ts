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
  // loader:boolean=true;


  constructor(
    private active: ActivatedRoute,
    private UsersService: UsersService
  ) {}

  ngOnInit(): void {

    this.userId = +this.active.snapshot.params['id'];

    this.UsersService.getSingleUser(this.userId).subscribe((response: any) => {
      this.selectUser = response;
    });
  }
}
