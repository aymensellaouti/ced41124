import { Component } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  concatMap,
  map,
  takeWhile,
  scan,
  tap,
  skip,
  takeUntil,
} from 'rxjs';
import { Product } from './dto/product.dto';
import { ProductService } from './services/product.service';
import { Settings } from './dto/product-settings.dto';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
    standalone: true,
    imports: [
    AsyncPipe
],
})
export class ProductsComponent {
  setting: Settings = { limit: 12, skip: 0 };
  disabled = false;
  settings$ = new BehaviorSubject<Settings>(this.setting);
  /**
   * Le flux des products
   */
  products$: Observable<Product[]> = this.settings$.pipe(
    // setiing1 setting2
    // 0 12   12 12  12 24 ....
    concatMap((setting) => this.productService.getProducts(setting)),
    map((apiResponse) => apiResponse.products),
    takeWhile((products) => {
      if (products.length == 0) {
        this.disabled = true;
        return false;
      }
      return true;
    }),
    scan((oldProducts, newProducts) => [...oldProducts, ...newProducts])
  );
  constructor(private productService: ProductService) {}
  /**
   * Get more products
   */
  more() {
    this.setting = {
      ...this.setting,
      skip: this.setting.skip + 12,
    };
    this.settings$.next(this.setting);
  }
  // getProducts(): Observable<Product[]> {
  //   return this.settings$.pipe(
  //     // setiing1 setting2
  //     // 0 12   12 12  12 24 ....
  //     concatMap((setting) => this.productService.getProducts(setting)),
  //     map((apiResponse) => apiResponse.products),
  //     takeWhile((products) => {
  //       if (products.length == 0) {
  //         this.disabled = true;
  //         return false;
  //       }
  //       return true;
  //     }),
  //     scan((oldProducts, newProducts) => [...oldProducts, ...newProducts])
  //   );
  // }
}
