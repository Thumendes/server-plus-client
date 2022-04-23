import { Router } from "express";

export abstract class Controller {
  abstract baseRoute: string;
  public route = Router();
}
