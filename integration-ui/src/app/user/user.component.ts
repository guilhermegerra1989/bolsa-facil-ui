import { Component, OnInit } from '@angular/core';
import { UserService } from '../../app/user/user.service';
import { User } from './../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  preserveWhitespaces: true
})
export class UserComponent implements OnInit {

  users: User[] = [];

  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getUsers().subscribe(result => this.users = result);
  }

}
