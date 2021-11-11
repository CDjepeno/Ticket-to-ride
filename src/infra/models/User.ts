import { IsEmail, IsInt, Length, Max, Min } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Comment } from "./Comment";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 200 })
  @Length(10, 20)
  username: string;

  @Column("varchar", { unique: true })
  @IsEmail()
  email: string;

  @Column("integer")
  @IsInt()
  @Min(18)
  @Max(100)
  age: number;

  @OneToMany(() => Comment, (comment) => comment.user, { nullable: false })
  comments: Comment[];
}
