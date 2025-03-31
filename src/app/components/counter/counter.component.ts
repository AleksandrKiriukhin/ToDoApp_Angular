import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  template: `
    <p>
      Counter value: {{counterValue()}}
    </p>
    <div>
      <button (click)="increment()">Increment</button>
      <button (click)="reset()">Reset</button>
      <button (click)="decrement()">Decrement</button>
    </div>
  `,
  styles: ``
})
export class CounterComponent {
  counterValue = signal(0);

  increment(){
    this.counterValue.set(this.counterValue() + 1)
  }

  decrement(){
    this.counterValue.set(this.counterValue() - 1)
  }

  reset(){
    this.counterValue.set(0)
  }
}
