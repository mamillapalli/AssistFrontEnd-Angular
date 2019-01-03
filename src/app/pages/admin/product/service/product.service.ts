import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BACK_END_URI } from '../../../../app.constants';
import { Product } from '../model/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductsList() {
    return this.http.get<any[]>(`${BACK_END_URI}/products`);
  }

  deleteProduct(id) {
    return this.http.delete(`${BACK_END_URI}/products/${id}`);
  }
  getProduct(id) {
    return this.http.get<any>(`${BACK_END_URI}/products/${id}`);
  }
  updateProduct(id, product: Product) {
    console.log('trying to update product in service method');
    return this.http.put<any>(`${BACK_END_URI}/products/${id}`, product);
  }
  createProduct(product) {
    return this.http.post<any>(`${BACK_END_URI}/products`, product);
  }
}




