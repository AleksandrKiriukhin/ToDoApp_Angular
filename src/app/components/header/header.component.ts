import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: `
    <header>
    <nav>
    
    <span routerLink="/">{{title}}</span>
    <ul>
      <li routerLink="/todos">Todos</li>
    </ul>

    </nav>
    </header>
  `,
  styles: `
  header {
    display: flex;
    padding-inline: 16px;
    padding-block: 8px;
    background-color: #3333;
    color: white;
    align-items: center;
    justify-content: space-between;
    
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
      span {
        &:hover {
          cursor: pointer;
          color: violet;
        }
      }
  }

  ul {
    list-style: none;
    li {
      &:hover {
        cursor: pointer;
        color: violet;
      }
    }
  }
  
  `
})
export class HeaderComponent {
  title = 'My first Angular App';
}
