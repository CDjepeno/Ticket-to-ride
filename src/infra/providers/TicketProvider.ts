import { ITicket } from "../../core-domain/entities/Ticket";
import { getRepository } from "typeorm";
import { ITicketRepository } from "../../core-domain/repository/ITicketRepository";
import { Ticket } from "../models/Ticket";
import { validate } from "class-validator";

export class TicketProvider implements ITicketRepository {
  async saveTicket(ticket: ITicket) {
    try {
      const newTicket = getRepository(Ticket).create(ticket);

      const err = await validate(newTicket);
      
      if( err.length > 0) {
        return err
      } else {
        await getRepository(Ticket).save(newTicket);
        return "ticket added";
      }

    } catch (err: any) {
      throw new Error(err);
    }
  }

  async updateTicket(ticket: ITicket, id: number) {
    try {
      const ticketForUpdate = await getRepository(Ticket).findOne(id);
      if (ticketForUpdate) {
        getRepository(Ticket).merge(ticketForUpdate, ticket);
        await getRepository(Ticket).save(ticketForUpdate);
        return "ticket updated";
      }
      throw new Error("unknow this ticket");
    } catch (err: any) {
      throw new Error(err);
    }
  }

  async getDetailsOneTicket(idTicket: number) {
    try {
      const ticketDetails = await getRepository(Ticket)
        .createQueryBuilder("ticket")
        .leftJoinAndSelect("ticket.comments", "comment")
        .where("ticket.id = :id", { id: idTicket })
        .getOne();
      return ticketDetails;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  async getOneTicket(id: number) {
    try {
      const ticket = await getRepository(Ticket).findOne(id);
      if (ticket) {
        return ticket;
      }
      throw new Error("unknow this ticket");
    } catch (err: any) {
      throw new Error(err);
    }
  }
}
