import {Component, computed, effect, Signal, signal, WritableSignal} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardModule} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-signals',
  imports: [
    MatCard,
    MatButton,
    MatCardContent,
    MatCardActions,
    MatCardHeader,
    MatCardModule,
    MatListModule
  ],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {

  count: WritableSignal<number> = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);
  effectLabel: WritableSignal<string> = signal("");

  constructor() {
    effect(() => {
      this.effectLabel.set(`The count has changed to ${this.count()}`)
    });
  }

  public updateCount() {
    this.count.update(value => value + 1)
  }
}
