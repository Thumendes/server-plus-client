import { sleep } from "@utils/general";
import { Logger } from "@utils/Logger";
import ora from "ora";
import { z } from "zod";

const Message = z.object({
  channel: z.string(),
  text: z.string(),
});

type Message = z.infer<typeof Message>;

export class BotService {
  async sendMessage(message: Message) {
    Message.parse(message);

    Logger.info(
      `Mandando mensagem ${Logger.bold(message.text)} para: ${message.channel}`
    );

    const spinner = ora("Sending message to bot...");

    spinner.start();
    await sleep(1000);
    spinner.succeed("Mensagem enviada com sucesso!");

    return message;
  }
}
