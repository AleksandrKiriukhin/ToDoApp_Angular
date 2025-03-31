import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  template: `
    <h2>
      Greetings!
    </h2>
    <p>{{message()}}</p>
  `,
  styles: ``
})
export class GreetingComponent {
message = input('Default');
}
