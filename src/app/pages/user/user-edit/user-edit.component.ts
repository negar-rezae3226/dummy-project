import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.interface';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-user-Edit',
  templateUrl: './user-Edit.component.html',
  styleUrls: ['./user-Edit.component.scss']
})
export class UserEditComponent {
  users: User[] = [];
  selectedUser: User = {};
  userId: number = 0;
  selectUser: User = {};




  constructor(private active: ActivatedRoute, private UsersService: UsersService) { }

  ngOnInit(): void {


    this.userId = +this.active.snapshot.params['id'];


    this.UsersService.getSingleUser(this.userId).subscribe(
      (response: User) => { this.selectedUser = response }
      )
  }
}
