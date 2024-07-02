import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orders } from '../models/orders.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private apiUrl = 'http://localhost:8080/api/orders';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Orders[]> {
    return this.http.get<Orders[]>(this.apiUrl);
  }

  getOrder(id: number): Observable<Orders> {
    return this.http.get<Orders>(`${this.apiUrl}/${id}`);
  }

  createOrder(orders: Orders): Observable<Orders> {
    return this.http.post<Orders>(this.apiUrl, orders);
  }

  updateOrder(id: number, orders: Orders): Observable<Orders> {
    return this.http.put<Orders>(`${this.apiUrl}/${id}`, orders);
  }

  deleteOrder(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
