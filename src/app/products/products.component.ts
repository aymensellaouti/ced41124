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
} from 'rxjs';
import { Product } from './dto/product.dto';
import { ProductService } from './services/product.service';
import { Settings } from './dto/product-settings.dto';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  setting: Settings = { limit: 12, skip: 0 };
  settings$ = new BehaviorSubject<Settings>(this.setting);
  products: Product[] = [];
  products$: Observable<Product[]> = this.settings$.pipe(
    // setiing1 setting2
    // 0 12   12 12  12 24 ....
    concatMap(setting => this.productService.getProducts(setting)),
    map(apiResponse => apiResponse.products)

  );
  constructor(private productService: ProductService) {}
  /**
   * Get more products
   */
  more() {
    this.setting = {
      ...this.setting,
      skip: this.setting.skip + 12
    };
    this.settings$.next(this.setting);
  }
}
