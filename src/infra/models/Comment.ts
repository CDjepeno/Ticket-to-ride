import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Ticket } from "./Ticket";
import { IsInt } from "class-validator";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  content: string;

  @Column("integer")
  @IsInt()
  userId: number;

  @Column("integer")
  @IsInt()
  ticketId: number;

  @ManyToOne(() => User, (user) => user.comments)
  user: User;

  @ManyToOne(() => Ticket, (ticket) => ticket.comments)
  ticket: Ticket;
}
