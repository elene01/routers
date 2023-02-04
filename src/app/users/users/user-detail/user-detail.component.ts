import { Component } from '@angular/core'
import userList from '../../../../assets/json/costumer-list.json'
import { ActivatedRoute } from '@angular/router'
import { UserServiceService } from '../../../user-service.service';



@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private route: ActivatedRoute,
    private UserService: UserServiceService
  ) {}
  id: number = -1
selectedUser = this.UserService.selectedUser

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id']
    console.log(this.id)
    if (this.id) {
      this.selectedUser = this.UserService.details.find((el) => el.id == this.id)

      console.log(this.selectedUser)
    }
  }
}
