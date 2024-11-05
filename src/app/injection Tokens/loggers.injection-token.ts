import { InjectionToken } from "@angular/core";
import { ILoggerService } from "../services/ilogger.service";

export const LoggersInjectionToken = new InjectionToken<ILoggerService[]>(
  'LoggersInjectionToken'
);
