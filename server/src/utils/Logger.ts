import chalk from "chalk";

export class Logger {
  static log(...logs: any[]) {
    const date = new Date();

    const hours = `${date.getHours()}`.padStart(2, "0");
    const minutes = `${date.getMinutes()}`.padStart(2, "0");
    const seconds = `${date.getSeconds()}`.padStart(2, "0");

    const day = `${date.getDate()}`.padStart(2, "0");
    const month = `${date.getMonth() + 1}`.padStart(2, "0");

    const timeString = chalk.gray(`[${day}/${month} ${hours}:${minutes}:${seconds}]`);

    return console.log(timeString, ...logs);
  }

  static success(title = "Success!", ...rest: any[]) {
    Logger.log(Logger.green(title), ...rest);
  }

  static warn(title = "Warning!", ...rest: any[]) {
    Logger.log(Logger.yellow(title), ...rest);
  }

  static error(title = "Error!", ...rest: any[]) {
    Logger.log(Logger.red(title), ...rest);
  }

  static info(title = "Info!", ...rest: any[]) {
    Logger.log(Logger.blue(title), ...rest);
  }

  static green(...logs: any[]) {
    return chalk.green(...logs);
  }

  static yellow(...logs: any[]) {
    return chalk.yellow(...logs);
  }

  static blue(...logs: any[]) {
    return chalk.cyan(...logs);
  }

  static red(...logs: any[]) {
    return chalk.red(...logs);
  }

  static bold(...logs: any[]) {
    return chalk.bold(...logs);
  }

  static divider() {
    const divider = Array.from({ length: 50 }, () => "-").join("");

    console.log(chalk.bold.gray(divider));
  }

  static timer(name: string) {
    let seconds = 0;

    const timer = setInterval(() => {
      seconds += 0.25;
    }, 250);

    function finish() {
      clearInterval(timer);

      Logger.info(`${name}: ${chalk.bold(`${seconds.toFixed(1)}s`)}`);
    }

    return { finish };
  }
}
