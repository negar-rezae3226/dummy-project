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
  users: User[]=[];
  selectedUser: User={};
  userId: number = 0;
  selectUser: User = {};

  


  constructor(private active: ActivatedRoute, private UsersService: UsersService) { }

  ngOnInit(): void {


    this.userId = +this.active.snapshot.params['id'];
    console.log(this.userId);

    this.UsersService.getSingleUser(this.userId)
      .then((res) => res.json())
      .then((json) => {
        this.selectedUser = json;
        console.log(this.selectedUser);
      });


  }
}
