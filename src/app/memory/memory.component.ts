import {Component, signal} from '@angular/core';
import {CardModel} from './card.model';
import {CardComponent} from './card/card.component';

@Component({
  selector: 'app-memory',
  imports: [
    CardComponent
  ],
  templateUrl: './memory.component.html',
  styleUrl: './memory.component.scss'
})
export class MemoryComponent {

  pairsNumber = signal(4);
  cards = signal<CardModel[]>([]);

    constructor() {
      const cards = this.generateCards(this.pairsNumber());
      this.cards.set(cards);
    }

    private generateCards(pairsNumber: number) {
      const cards: CardModel[] = [];
      for (var i = 0; i < pairsNumber; i++){
        const c1: CardModel = this.generateCard(i);
        const c2: CardModel = this.generateCard(i);
        cards.push(c1);
        cards.push(c2);
      }
      return cards;

    }

    private generateCard(index: number): CardModel {
      return {id: index, name: 'index_' + index}
    }



}
