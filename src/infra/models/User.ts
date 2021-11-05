import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Comment } from './Comment';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar",{ length: 200 })
  username: string;

  @Column("varchar",{ length: 200 })
  email: string;

  @Column("integer")
  age: number;

  @OneToMany(() => Comment, comment => comment.user, { nullable: false }) 
  comments: Comment[]
}
