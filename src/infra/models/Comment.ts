import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { User } from './User';
import { Ticket } from './Ticket';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  userId: number

  @Column()
  ticketId: number 

  @ManyToOne(() => User, user => user.comments)
  user: User

  @ManyToOne(() => Ticket, ticket => ticket.comments)
  ticket: Ticket
}
