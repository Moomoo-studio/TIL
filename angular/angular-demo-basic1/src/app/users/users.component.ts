import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [];

  // data;

  constructor(private userService: UserService) { }

  /**
   * 
   */
  // async ngOnInit() {
  //   let data = null;
  //   try {
  //     data = await this.userService.getUsers();
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   if (data) {
  //     this.users = data.json();
  //   }
  // }

  // observable의 변수는 뒤에 $ 붙임 

  ngOnInit() {
    const users$ = this.userService.getUsersObservable().startWith({});

    users$.subscribe( data => {
      console.log(data);
      // this.users = data.json();
      // this.data = data;
    });
  }

}
