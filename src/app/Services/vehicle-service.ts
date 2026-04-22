import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct, ICategory } from '../models/Iproduct';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehiclesService {
  private apiUrl = 'https://api.escuelajs.co/api/v1/products';
  private categoryUrl = 'https://api.escuelajs.co/api/v1/categories';

  constructor(private http: HttpClient) {}

  // ─────────────────────────────────────────
  //   API Methods
  // ─────────────────────────────────────────

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiUrl).pipe(
      map(products => products.map(p => ({ ...p, Quantity: Math.floor(Math.random() * 10) }))) // Mocking Quantity for the UI
    );
  }

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this.categoryUrl);
  }

  getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.apiUrl}/${id}`);
  }

  searchProducts(params: { title?: string; price_min?: number; price_max?: number; categoryId?: number }): Observable<IProduct[]> {
    let url = `${this.apiUrl}/?`;
    if (params.title) url += `title=${params.title}&`;
    if (params.price_min) url += `price_min=${params.price_min}&`;
    if (params.price_max) url += `price_max=${params.price_max}&`;
    if (params.categoryId) url += `categoryId=${params.categoryId}&`;
    
    return this.http.get<IProduct[]>(url);
  }

  // ─────────────────────────────────────────
  //   Legacy compatibility / Helper Methods
  // ─────────────────────────────────────────

  buy(product: IProduct): void {
    if (product.Quantity && product.Quantity > 0) {
      product.Quantity--;
    }
  }
}
