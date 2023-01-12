import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import { expressApp } from "./express-app";


createConnection()
  .then(async (_) => {
    const app = express();
    const PORT = 3000

    expressApp(app);

    app.listen(PORT); 

    console.log(
      `Express server has started on port ${PORT}`
    );
  })
  .catch((err) => console.log(err));