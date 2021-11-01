export class UI {
  constructor(private logger: Logger) {}
  log(...data: unknown[]): void {
    this.logger.log(data);
  }
}

import { Logger } from "./logger";
