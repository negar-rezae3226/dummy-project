import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private paramSource = new BehaviorSubject(null);
  sharedParam = this.paramSource.asObservable();
  UpdateORAddUser:boolean=true;

  constructor() {}

  changeParam(user: any) {
    this.paramSource.next(user);
  }
}
