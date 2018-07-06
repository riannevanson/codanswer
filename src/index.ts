// src/index.ts
import "reflect-metadata";
import { createKoaServer } from "routing-controllers";
import QuestionController from "./questions/controller";
import setupDb from "./db";

const app = createKoaServer({
  controllers: [QuestionController]
});

setupDb()
  .then(_ => app.listen(4000, () => console.log("Listening on port 4000")))
  .catch(err => console.error(err));
