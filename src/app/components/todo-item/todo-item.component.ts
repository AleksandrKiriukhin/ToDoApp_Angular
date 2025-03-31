import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo.directive';

export type Todo = {
  userId: number;
  completed: boolean;
  title: string;
  id: number;
};

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [HighlightCompletedTodoDirective],
  template: `
    <li
      appHighlightCompletedTodo
      [isCompleted]="todo.completed"
      class="todos__item"
    >
      <input
        id="todo-{{ todo.id }}"
        type="checkbox"
        [checked]="todo.completed"
        (change)="todoClicked()"
      />
      <label for="todo-{{ todo.id }}">{{ todo.title }}</label>
    </li>
  `,
  styles: [
    `
      .todos__item {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 0;
      }
    `,
  ],
})
export class TodoItemComponent {
  @Input() todo!: Todo; // The todo passed from parent
  @Output() todoToggled = new EventEmitter<Todo>(); // Emits when the checkbox is toggled

  todoClicked() {
    this.todoToggled.emit(this.todo);
  }
}
