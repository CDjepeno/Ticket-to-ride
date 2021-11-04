import * as express from 'express';
import * as cors from "cors";
import userRoutes from './routes/userRoutes';
import * as swaggerDocument from '../../swagger.json'
import * as swaggerUi from 'swagger-ui-express';
import ticketRoutes from './routes/ticketRoutes';

export const expressApp = async(app) => {
  app.use(express.json());
  app.use(cors());

  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); 
  app.use(userRoutes)
  app.use(ticketRoutes)

}