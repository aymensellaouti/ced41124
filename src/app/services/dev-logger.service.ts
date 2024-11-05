import { ILoggerService } from "./ilogger.service";

export class DevLoggerService implements ILoggerService {
  logger(message: unknown): void {
    console.log('From DevLoggerService');
    console.log(message);
  }
}
