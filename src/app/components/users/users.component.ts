import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../../models/User';
import { buildPath } from 'selenium-webdriver/http';

import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;

  @ViewChild('userForm', {static:true}) form: any;

  data: any;

  constructor(private userService: UserService) { }

  ngOnInit() {

  
    this.userService.getUsers().subscribe(data=>{
      this.users = data
      this.loaded = true;
    });

    

    
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {

    if (!valid) {
      console.log("form is not valid");
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true

      this.userService.addUser(value)

      this.form.reset();
    }



  }

  // fireEvent(e){
  //   console.log(e.target.value);
  //   console.log(e.type);
  // }


}
