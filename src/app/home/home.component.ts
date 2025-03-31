import { Component, signal } from '@angular/core';
import { CounterComponent } from '../components/counter/counter.component';
import { GreetingComponent } from '../components/greeting/greeting.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, CounterComponent],
  template: `
    
    <app-greeting [message]="Homemessage()" />
    <app-counter />
    <input placeholder="Type here..." type="text" (keyup)="keyUpHandler()">
  `,
  styles: ``
})
export class HomeComponent {
  Homemessage = signal('Hello!');

  keyUpHandler(){
    console.log('user typed smth')
  }
}
