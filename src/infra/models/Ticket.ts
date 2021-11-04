import {Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { Comment } from './Comment';
import { User } from './User';

export enum Status {
  TODO = "todo",
  WIP = "wip",
  DONE = "done"
}

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    type: "enum",
    enum: Status,
    default: Status.TODO
  })
  status: string;

  @OneToMany(() => Comment, comment => comment.ticket, { nullable: true })
  @JoinColumn()
  comments: Comment[]

  @Column()
  userId: number

  @OneToOne(() => User)  
  @JoinColumn()
  user: User
}