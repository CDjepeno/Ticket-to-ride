import { ITicket } from './../../core/entities/Ticket';
import { getRepository } from 'typeorm';
import { ITicketRepository } from '../../core/repository/ITicketRepository';
import { Ticket } from '../models/Ticket';

export class TicketProvider implements ITicketRepository {

  async saveTicket(ticket: ITicket){
    try {
      const newTicket = await getRepository(Ticket).create(ticket)
      await getRepository(Ticket).save(newTicket)
      return "ticket added"
    } catch (err) {
      throw new Error(err)
    }
  }

  async updateTicket(ticket: ITicket ,id: number) {
    try {
      const ticketForUpdate = await getRepository(Ticket).findOne(id);
      if (ticketForUpdate) {
        getRepository(Ticket).merge(ticketForUpdate, ticket);
        await getRepository(Ticket).save(ticketForUpdate);
        return "fsdfs"
      }
      throw new Error("unknow this ticket");
    } catch (e) {
      throw new Error(e)
    }
  }

  async getDetailsOneTicket(idTicket: number) {
    try {
      const ticketDetails = await getRepository(Ticket)
      .createQueryBuilder("ticket")
      .leftJoinAndSelect("ticket.comments", "comment")
      .where("ticket.id = :id", { id : idTicket })
      .getOne()
       return ticketDetails
    } catch (e) {
      throw new Error(e)
    }
  }

}