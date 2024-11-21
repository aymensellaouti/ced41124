import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { ColorComponent } from './components/color/color.component';
import { SecondComponent } from './components/second/second.component';
import { NF404Component } from './components/nf404/nf404.component';
import { LoginComponent } from './auth/login/login.component';
import { SliderComponent } from './rxjs/slider/slider.component';
import { APP_ROUTES } from './config/app-routes.config';
import { ProductsComponent } from './products/products.component';
import { CustomPreloadingStrategy } from './preloadingStrategy/custom.preloading-strategy';
import { RhComponent } from './optimizationPattern/rh/rh.component';

const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'rh', component: RhComponent },
  {
    path: APP_ROUTES.cv,
    loadChildren: () => import('./cv/cv.module'),
    data: {
      preload: true
    }
  },
  { path: 'todo', loadChildren: () => import('./todo/todo.module').then(
    fichier => fichier.TodoModule
  )},
  { path: APP_ROUTES.products, component: ProductsComponent },
  { path: 'word', component: MiniWordComponent },
  { path: 'login', component: LoginComponent },
  { path: 'color', component: ColorComponent },
  { path: ':myParam', component: SecondComponent },
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloadingStrategy

    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
