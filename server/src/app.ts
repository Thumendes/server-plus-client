import express from "express";
import cors from "cors";

import { Logger } from "@utils/Logger";
import { LogMiddleware } from "@utils/Middlewares/Log";

import { Controller } from "@utils/Controller";
import { TodoController } from "@controllers/TodoController";
import { BotController } from "@controllers/BotController";

export class App {
  public app: express.Application;
  public port = process.env.PORT || 4000;

  constructor() {
    this.app = express();

    this.config();
    this.routes();
    this.listen();
  }

  private config(): void {
    this.app.use(express.json()).use(cors()).use(LogMiddleware);
  }

  private route(controller: Controller) {
    this.app.use(controller.baseRoute, controller.route);
  }

  private routes(): void {
    this.route(BotController.make());
    this.route(TodoController.make());
  }

  public listen(): void {
    const port = this.port;

    this.app.listen(port, () => {
      Logger.success("Server started at:");
      Logger.info(`> http://localhost:${Logger.bold(port)}`);
      Logger.divider();
    });
  }
}
