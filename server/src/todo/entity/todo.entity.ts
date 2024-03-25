import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id:string;

    @Column()
    name:string

    @Column()
    isDeleted:boolean;

    @Column()
    isChecked:boolean;
}