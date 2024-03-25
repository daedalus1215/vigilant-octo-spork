import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoCategory } from './entity/todo-category.schema';
import { Repository } from 'typeorm';
import { CreateTodoCategoryDto } from './dtos/create-todo-category.dto';

@Injectable()
export class TodoService {
    constructor(@InjectRepository(TodoCategory) private todoRepository: Repository<TodoCategory>) { }
    async findOne(id: string) {
        if (!id) {
            return null;
        }
        return await this.todoRepository.findOneBy({ id });
    }

    create(dto: CreateTodoCategoryDto) {
        const todo = this.todoRepository.create((dto as TodoCategory));
        return this.todoRepository.save(todo);
    }
}
