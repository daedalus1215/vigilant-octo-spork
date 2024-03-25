import { Injectable } from '@nestjs/common';
import { TodoCategory, TodoCategoryDocument } from './entity/todo-category.schema';
import { CreateTodoCategoryDto } from './dtos/create-todo-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TodoService {
    constructor(@InjectModel(TodoCategory.name) private model: Model<TodoCategoryDocument>) { }

    async findAll() {
        return await this.model.find();
    }   

    async findOne(id: string) {
        if (!id) {
            return null;
        }
        return await this.model.findById(id);
    }

    async create(dto: CreateTodoCategoryDto) {
        const todo = await this.model.create((dto as TodoCategory));
        return todo.save();
    }
}
