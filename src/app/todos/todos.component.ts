import { NgIf, NgFor } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { catchError } from 'rxjs';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { TodosService } from '../services/todos.service';

export type Todo = {
  userId: number;
  completed: boolean;
  title: string;
  id: number;
};

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgIf, NgFor, TodoItemComponent],
  template: `
    <h3>Todos list</h3>

    <p *ngIf="!todoItems().length">Loading...</p>
    <ul class="todos">
      <li *ngFor="let todo of todoItems()">
        <app-todo-item (todoToggled)="updateTodoItem($event)" [todo]="todo"></app-todo-item>
      </li>
    </ul>
  `,
  styles: `
    .todos {
      list-style-type: none;
      padding: 0;
    }

    .todos__item {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  `
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);

  ngOnInit(): void {
    this.todoService.getTodosFromApi()
      .pipe(
        catchError((err) => {
          console.error(err);
          throw err;
        })
      )
      .subscribe((todos) => {
        this.todoItems.set(todos);
      });
  }

  updateTodoItem(todoItem: Todo) {
    this.todoItems.update((todos) => {
      return todos.map((todo) => {
        if (todo.id === todoItem.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  }
}
