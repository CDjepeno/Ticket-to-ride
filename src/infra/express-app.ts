import * as express from 'express';
import * as cors from "cors";

export const expressApp = async(app) => {
  app.use(express.json());
  app.use(cors());

}