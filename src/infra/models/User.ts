import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Comment } from './Comment';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  age: number;

  @OneToMany(() => Comment, comment => comment.user, { nullable: false }) 
  comments: Comment[]
}
