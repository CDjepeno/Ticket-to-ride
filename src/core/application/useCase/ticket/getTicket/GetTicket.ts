import {  GetTicketResponse } from './GetTicketResponse';
import { ITicketRepository } from '../../../../repository/ITicketRepository';

export class GetTicket {
  constructor(private repository: ITicketRepository){}

  async execute(id: number) {
    const response = new GetTicketResponse();
    response.ticket = await this.repository.getDetailsOneTicket(id);

    return response
  }

}