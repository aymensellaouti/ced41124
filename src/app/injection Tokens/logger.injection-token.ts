import { InjectionToken } from "@angular/core";
import { ILoggerService } from "../services/ilogger.service";

export const LoggerInjectionToken = new InjectionToken<ILoggerService>(
  'LoggerInjectionToken'
);
