import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { FormsModule } from '@angular/forms';
import { RotatingCardComponent } from './components/rotating-card/rotating-card.component';
import { PereComponent } from './comInterComponents/pere/pere.component';
import { FilsComponent } from './comInterComponents/fils/fils.component';
import { CvComponent } from './cv/cv/cv.component';
import { CvListComponent } from './cv/cv-list/cv-list.component';
import { CvCArdComponent } from './cv/cv-card/cv-card.component';
import { CvItemComponent } from './cv/cv-item/cv-item.component';
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { LampeComponent } from './directives/lampe/lampe.component';
import { HighglightDirective } from './directives/highglight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import { TodoComponent } from './todo/todo/todo.component';
import {ILoggerService} from './services/ilogger.service';
import { LoggerInjectionToken } from './injection Tokens/logger.injection-token';
import { APP_CONSTANTES } from './config/app-constantes.config';
import { LoggerService } from './services/logger.service';
import { DevLoggerService } from './services/dev-logger.service';
import { LoggersInjectionToken } from './injection Tokens/loggers.injection-token';
import { WeekTodoComponent } from './todo/week-todo/week-todo.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    RotatingCardComponent,
    PereComponent,
    FilsComponent,
    CvComponent,
    CvListComponent,
    CvCArdComponent,
    CvItemComponent,
    NgstyleComponent,
    MiniWordComponent,
    LampeComponent,
    HighglightDirective,
    TodoComponent,
    WeekTodoComponent,
    RainbowDirective,
    DefaultImagePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    {
      provide: LoggerInjectionToken,
      useClass: APP_CONSTANTES.env === 'production' ? LoggerService : DevLoggerService
    },
    {
      provide: LoggersInjectionToken,
      useClass: LoggerService,
      multi: true
    },
    {
      provide: LoggersInjectionToken,
      useClass: DevLoggerService,
      multi: true
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
