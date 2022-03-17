import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";


@Entity()
export class Tool {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;

    @Column('text')
    link:string;

    @Column('text')
    description:string;

   @Column({type:'simple-array'})
   tags:string[];
   
}