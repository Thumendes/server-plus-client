import { Logger } from "@utils/Logger";
import { NextFunction, Request, Response } from "express";

export function LogMiddleware(req: Request, res: Response, next: NextFunction) {
  const timeOnRequest = performance.now();

  // Listen to response
  res.on("finish", () => {
    const colors = [
      { ok: res.statusCode >= 500, log: Logger.red },
      { ok: res.statusCode >= 400, log: Logger.yellow },
      { ok: res.statusCode >= 300, log: Logger.blue },
      { ok: res.statusCode >= 200, log: Logger.green },
    ];

    const color = colors.find(({ ok }) => ok);
    if (!color) return;

    const timeOnResponse = performance.now();

    const time = `${(timeOnResponse - timeOnRequest).toFixed(2)} ms`;

    // Log request
    Logger.log(
      `${Logger.bold(req.method)} ${req.originalUrl} ${color.log(
        res.statusCode
      )} - ${time}`
    );
  });

  // Call next middleware
  next();
}
