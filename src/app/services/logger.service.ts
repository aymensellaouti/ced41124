import { ILoggerService } from './ilogger.service';

export class LoggerService implements ILoggerService {
  logger(message: unknown): void {
    console.log('From LoggerService');
    console.log(message);
  }
}
