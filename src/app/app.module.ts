import { NgModule, isDevMode } from '@angular/core';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RotatingCardComponent } from './components/rotating-card/rotating-card.component';
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { LampeComponent } from './directives/lampe/lampe.component';
import { HighglightDirective } from './directives/highglight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { LoggerInjectionToken } from './injection Tokens/logger.injection-token';
import { APP_CONSTANTES } from './config/app-constantes.config';
import { LoggerService } from './services/logger.service';
import { DevLoggerService } from './services/dev-logger.service';
import { LoggersInjectionToken } from './injection Tokens/loggers.injection-token';
import { UUIDInjectionToken } from './injection Tokens/uuid.injection-token';
import { v4 as uuidv4 } from 'uuid';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NF404Component } from './components/nf404/nf404.component';
import { TestFormComponent } from './forms/test-form/test-form.component';
import { LoginComponent } from './auth/login/login.component';
import { TestObservableComponent } from './rxjs/test-observable/test-observable.component';
import { authInterceptorProvider } from './auth/interceptors/auth.interceptor';
import { FromOfComponent } from './rxjs/from-of/from-of.component';
import { SliderComponent } from './rxjs/slider/slider.component';
import { ProductsComponent } from './products/products.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer, uxSliceName } from './store';
import { EffectsModule } from '@ngrx/effects';
import { RhComponent } from './optimizationPattern/rh/rh.component';
import { UserListComponent } from './optimizationPattern/user-list/user-list.component';
import { PereComponent } from './cd/pere/pere.component';
import { FilsComponent } from './cd/fils/fils.component';
import { UsersComponent } from './optimizationPattern/users/users.component';
import { FiboPipe } from './pipes/fibo.pipe';
import { IsEvenComponent } from './signals/is-even/is-even.component';
import { InputSignalComponent } from './signals/input-signal/input-signal.component';
import { FirstSignalComponent } from './signals/first-signal/first-signal.component';
import { TtcComponent } from './signals/ttc/ttc.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    RotatingCardComponent,


    // Cv

    // directives
    NgstyleComponent,
    MiniWordComponent,
    LampeComponent,
    HighglightDirective,
    RainbowDirective,

    // Routing
    NavbarComponent,
    NF404Component,
    // Form
    TestFormComponent,
    LoginComponent,
    // RxJs
    TestObservableComponent,
    FromOfComponent,
    SliderComponent,
    ProductsComponent,

    // Optimization Pattern
    RhComponent,
    UserListComponent,
    PereComponent,
    FilsComponent,
    UsersComponent,
    FiboPipe,

    //signals
    IsEvenComponent,
    InputSignalComponent,
    FirstSignalComponent,
    TtcComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
    ReactiveFormsModule,
    NgxUiLoaderModule,
    AppRoutingModule,
    StoreModule.forRoot({ [uxSliceName]: appReducer }, {}),
    // Mise en place du debugger Redux DEvTools
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),
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
