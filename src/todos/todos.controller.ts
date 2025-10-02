import { Controller, Get, Post, Patch, Param, Body, Query, NotFoundException, UseGuards } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './interfaces/todo.interface';
import { AuthGuard } from './auth.guard';

@Controller('todos')
@UseGuards(AuthGuard) // Optional auth guard
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  findAll(@Query('search') search?: string): Todo[] {
    return this.todosService.findAll(search);
  }

  @Post()
  create(@Body() createTodoDto: CreateTodoDto): Todo {
    return this.todosService.create(createTodoDto);
  }

  @Patch(':id')
  toggleCompleted(@Param('id') id: string): Todo {
    const todo = this.todosService.toggleCompleted(id);
    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    return todo;
  }
  
}