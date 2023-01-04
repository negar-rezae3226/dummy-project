import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.scss']
})
export class UsersManagementComponent {

  selectedId?: number;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {


  }
}
