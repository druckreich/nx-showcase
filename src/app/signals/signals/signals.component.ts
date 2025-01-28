import {Component, computed, effect, signal} from '@angular/core';
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

  code = '  count = signal(0);\n' +
    '  doubleCount = computed(() => this.count() * 2);\n' +
    '  effectLabel = signal("");\n' +
    '\n' +
    '  constructor() {\n' +
    '    effect(() => {\n' +
    '      this.effectLabel.set(`The count has changed to ${this.count()}`)\n' +
    '    });\n' +
    '  }\n' +
    '\n' +
    '  public updateCount() {\n' +
    '    this.count.set(this.count() + 1);\n' +
    '  }'

  count = signal(0);
  doubleCount = computed(() => this.count() * 2);
  effectLabel = signal("");

  constructor() {
    effect(() => {
      this.effectLabel.set(`The count has changed to ${this.count()}`)
    });
  }

  public updateCount() {
    this.count.set(this.count() + 1);
  }
}
