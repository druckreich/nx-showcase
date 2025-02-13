import {Component, computed, input, InputSignal} from '@angular/core';
import {User} from '../user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  user = input.required<User>();
  userLabel = computed(() => `${this.user().name} ${this.user().email}`);
}
