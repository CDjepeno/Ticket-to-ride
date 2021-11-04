import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import { expressApp } from "./express-app";


createConnection()
  .then(async (_) => {
    const app = express();

    expressApp(app);

    app.listen(3000); 

    console.log(
      "Express server has started on port 3000. Open http://localhost:3000"
    );
  })
  .catch((err) => console.log(err));