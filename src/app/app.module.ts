import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';


import { ToastrModule } from 'ngx-toastr';

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
import { UUIDInjectionToken } from './injection Tokens/uuid.injection-token';
import { v4 as uuidv4 } from 'uuid';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NF404Component } from './components/nf404/nf404.component';
import { TestFormComponent } from './forms/test-form/test-form.component';
import { LoginComponent } from './auth/login/login.component';
import { TestObservableComponent } from './rxjs/test-observable/test-observable.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { authInterceptorProvider } from './auth/interceptors/auth.interceptor';
import { FromOfComponent } from './rxjs/from-of/from-of.component';
import { SliderComponent } from './rxjs/slider/slider.component';
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
    EmbaucheComponent,
    DetailsCvComponent,

    NgstyleComponent,
    MiniWordComponent,
    LampeComponent,
    HighglightDirective,

    TodoComponent,
    WeekTodoComponent,

    RainbowDirective,
    DefaultImagePipe,
    NavbarComponent,
    NF404Component,
    TestFormComponent,
    LoginComponent,
    TestObservableComponent,
    AddCvComponent,
    FromOfComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
  ],
  providers: [
    {
      provide: LoggerInjectionToken,
      useClass:
        APP_CONSTANTES.env === 'production' ? LoggerService : DevLoggerService,
    },
    {
      provide: LoggersInjectionToken,
      useClass: LoggerService,
      multi: true,
    },
    {
      provide: LoggersInjectionToken,
      useClass: DevLoggerService,
      multi: true,
    },
    {
      provide: UUIDInjectionToken,
      useValue: uuidv4,
    },
    authInterceptorProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
