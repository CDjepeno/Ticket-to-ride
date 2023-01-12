import * as express from 'express';
import * as cors from "cors";
import userRoutes from './routes/userRoutes';
import * as swaggerDocument from '../../swagger.json'
import * as swaggerUi from 'swagger-ui-express';
import ticketRoutes from './routes/ticketRoutes';
import commentRoutes from './routes/commentRoutes';
import loginRoute from './routes/loginRoutes';

export const expressApp = async(app: any) => {
  app.use(express.json());
  app.use(cors());

  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); 
  app.use(userRoutes)
  app.use(ticketRoutes)
  app.use(commentRoutes)
  app.use(loginRoute)

}