import { Component, inject } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { NgxUiLoaderService, NgxUiLoaderModule } from 'ngx-ui-loader';
import { appComponantActionGroup } from './store/action';
import { AppState } from './store';
import { ConnectedUser } from './auth/service/auth.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InputSignalComponent } from './signals/input-signal/input-signal.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: true,
    imports: [
        NavbarComponent,
        InputSignalComponent,
        RouterOutlet,
        NgxUiLoaderModule,
    ],
})
export class AppComponent {
  title = 'ced41124';
  router = inject(Router);
  ngxUiLoaderService = inject(NgxUiLoaderService);
  store: Store<AppState> = inject(Store<AppState>);
  constructor() {
    this.store.subscribe((state) => console.log({ state }));

    this.store.dispatch(appComponantActionGroup.loadAPP());
    const connectedUser: ConnectedUser = {
      id: 1,
      email: 'admin@actiongroup.com',
    }
    this.store.dispatch(appComponantActionGroup.addUser({
      user: connectedUser
    }));


    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationStart) {
    //     this.ngxUiLoaderService.start();
    //   } else if (
    //     event instanceof NavigationEnd ||
    //     event instanceof NavigationCancel ||
    //     event instanceof NavigationError
    //   ) {
    //     this.ngxUiLoaderService.stop();
    //   }
    // });
  }
}
