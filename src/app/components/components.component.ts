import {Component, signal, WritableSignal} from '@angular/core';
import {UserListComponent} from './user-list/user-list.component';
import {User} from './user.model';

@Component({
  selector: 'app-components',
  imports: [
    UserListComponent
  ],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss'
})
export class ComponentsComponent {
  users: WritableSignal<User[]> = signal([
    {id: 0, name: 'John', email: 'john@gmail.com'},
    {id: 1, name: 'James', email: 'james@gmail.com'},
    {id: 2, name: 'Jane', email: 'jane@gmail.com'},
    {id: 3, name: 'Adam', email: 'adam@gmail.com'},
    {id: 4, name: 'Felix', email: 'felix@gmail.com'},
    {id: 5, name: 'Brandon', email: 'brandon@gmail.com'},
  ])
}
