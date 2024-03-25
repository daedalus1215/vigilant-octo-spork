import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoCategory } from './entity/todo-category.schema';
import { TodoController } from './todo.controller';

@Module({
    imports: [TypeOrmModule.forFeature([TodoCategory])],
    providers: [TodoService],
    controllers: [TodoController]
})
export class TodoModule { }
