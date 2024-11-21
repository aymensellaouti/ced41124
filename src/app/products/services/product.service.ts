import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Settings } from '../dto/product-settings.dto';
import { ProductApiResponse } from '../dto/product-api-response.dto';
import { APP_API } from '../../config/app-api.config';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);


  constructor() {}
  getProducts(setting: Settings) {
    const { limit, skip } = setting;
    return this.http.get<ProductApiResponse>(`${APP_API.products}?limit=${limit}&skip=${skip}`);
  }
}
