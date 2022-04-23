import { BotService } from "@services/BotService";
import { Controller } from "@utils/Controller";
import { Request, Response } from "express";
import { ZodError } from "zod";

export class BotController extends Controller {
  baseRoute = "/bot";

  constructor(private botService: BotService) {
    super();

    this.route.post("/send-message", this.sendMessage.bind(this));
  }

  static make() {
    return new BotController(new BotService());
  }

  async sendMessage(req: Request, res: Response) {
    const response = await this.botService
      .sendMessage(req.body)
      .catch((error: ZodError) => {
        return { error: error.format() };
      });

    if ("error" in response) {
      return res.status(400).json(response.error);
    }

    return res.sendStatus(200);
  }
}
