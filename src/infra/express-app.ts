import * as express from 'express';
import * as cors from "cors";
import userRoutes from './routes/userRoutes';
import * as swaggerDocument from '../../swagger.json'
import * as swaggerUi from 'swagger-ui-express';

export const expressApp = async(app) => {
  app.use(express.json());
  app.use(cors());

  app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); 
  app.use(userRoutes)

}