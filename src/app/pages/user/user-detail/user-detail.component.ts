import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  userId: any = {};

  constructor(private active: ActivatedRoute){}

  ngOnInit(): void {

    this.userId = this.active.params.subscribe(param => console.log(param))

  }

}
