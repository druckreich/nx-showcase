import {Component, Input, input} from '@angular/core';
import {MatList, MatListItem} from '@angular/material/list';
import {UserComponent} from '../user/user.component';
import {User} from '../user.model';

@Component({
  selector: 'app-user-list',
  imports: [
    MatList,
    UserComponent,
    MatListItem
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  users = input<User[]>([]);

}
