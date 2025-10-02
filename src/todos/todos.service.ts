import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodosService {
  private todos: Todo[] = [];
  private currentId = 1;

  findAll(search?: string): Todo[] {
    if (search) {
      return this.todos.filter(todo => 
        todo.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    return this.todos;
  }

  create(createTodoDto: CreateTodoDto): Todo {
    const todo: Todo = {
      id: this.currentId.toString(),
      title: createTodoDto.title,
      completed: false,
      createdAt: new Date(),
    };
    
    this.todos.push(todo);
    this.currentId++;
    return todo;
  }

  toggleCompleted(id: string): Todo | null {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      return todo;
    }
    return null;
  }

  findOne(id: string): Todo | null {
    return this.todos.find(t => t.id === id) || null;
  }
}