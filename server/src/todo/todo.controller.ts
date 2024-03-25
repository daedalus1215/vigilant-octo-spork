import { Body, Controller, Get, Injectable, Param, Post } from "@nestjs/common";
import { TodoService } from "./todo.service";
import { TodoCategory } from "./entity/todo-category.schema";
import { CreateTodoCategoryDto } from "./dtos/create-todo-category.dto";
import { serialize } from "class-transformer";
import { Serialize } from "src/interceptors/serialize.interceptor";

@Controller()
export class TodoController {
    constructor(private todoService: TodoService) { }

    @Get('/:id')
    async findOne(@Param('id') id: string) {
        return await this.todoService.findOne(id);
    }

    @Post()
    @Serialize(CreateTodoCategoryDto)
    createReport(@Body() body: CreateTodoCategoryDto) {
        return this.todoService.create(body);
    }
}