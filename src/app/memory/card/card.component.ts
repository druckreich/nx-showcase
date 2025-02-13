import {Component, input} from '@angular/core';
import {CardModel} from '../card.model';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styles: [`
    div {
      border: 1px solid grey;
      border-radius: 4px;
      width: 64px;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 8px
    }
  `]
})
export class CardComponent {
  card = input.required<CardModel>();
}
