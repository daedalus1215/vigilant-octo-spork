import { AfterInsert, AfterRemove, AfterUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Todo } from "./todo.entity";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
class TodoCategory {
    @Prop()
    name: string;

    @Prop()
    todos: Todo[];
}

export const TodoCategorySchema = SchemaFactory.createForClass(TodoCategory);
