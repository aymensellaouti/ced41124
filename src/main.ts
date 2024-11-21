import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { LoggerInjectionToken } from './app/injection Tokens/logger.injection-token';
import { APP_CONSTANTES } from './app/config/app-constantes.config';
import { LoggerService } from './app/services/logger.service';
import { DevLoggerService } from './app/services/dev-logger.service';
import { LoggersInjectionToken } from './app/injection Tokens/loggers.injection-token';
import { UUIDInjectionToken } from './app/injection Tokens/uuid.injection-token';
import { v4 as uuidv4 } from 'uuid';
import { authInterceptorProvider } from './app/auth/interceptors/auth.interceptor';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { AppRoutingModule } from './app/app-routing.module';
import { StoreModule } from '@ngrx/store';
import { uxSliceName, appReducer } from './app/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { isDevMode, importProvidersFrom } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(
        BrowserModule,
        FormsModule, // required animations module
        ToastrModule.forRoot(), // ToastrModule added
        ReactiveFormsModule, NgxUiLoaderModule, AppRoutingModule, StoreModule.forRoot({ [uxSliceName]: appReducer }, {}),
        // Mise en place du debugger Redux DEvTools
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }), EffectsModule.forRoot([])),
        provideHttpClient(withInterceptorsFromDi()),
        {
            provide: LoggerInjectionToken,
            useClass: APP_CONSTANTES.env === 'production' ? LoggerService : DevLoggerService,
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
        provideAnimations(),
        provideRouter([])
    ],

})
  .catch(err => console.error(err));
