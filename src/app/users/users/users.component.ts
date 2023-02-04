import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { UserServiceService } from '../../user-service.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  constructor (private activatedRoute: ActivatedRoute,private route: ActivatedRoute,private UserService: UserServiceService){}

list = this.UserService.list
selectedUser = this.UserService.selectedUser


}
