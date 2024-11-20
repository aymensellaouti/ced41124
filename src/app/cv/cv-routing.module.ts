import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { authGuard } from '../auth/guards/auth.guard';
import { APP_ROUTES } from '../config/app-routes.config';
import { AddCvComponent } from './add-cv/add-cv.component';
import { CvComponent } from './cv/cv.component';
import { DetailsCvComponent } from './details-cv/details-cv.component';
import { MasterDetailsComponent } from './master-details/master-details.component';
import { masterDetailResolver } from './resolvers/master-detail.resolver';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: CvComponent },
      {
        path: `add`,
        component: AddCvComponent,
        canActivate: [authGuard],
      },
      {
        path: `list`,
        component: MasterDetailsComponent,
        resolve: {
          cvs: masterDetailResolver,
        },
        children: [{ path: ':id', component: DetailsCvComponent }],
      },
      { path: `:id`, component: DetailsCvComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class CvRoutingModule {}
