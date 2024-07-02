import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customers } from '../models/customers.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private apiUrl = 'http://localhost:8080/api/customers';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customers[]> {
    return this.http.get<Customers[]>(this.apiUrl);
  }

  getCustomer(id: number): Observable<Customers> {
    return this.http.get<Customers>(`${this.apiUrl}/${id}`);
  }

  createCustomer(customers: Customers): Observable<Customers> {
    return this.http.post<Customers>(this.apiUrl, customers);
  }

  updateCustomer(id: number, customers: Customers): Observable<Customers> {
    return this.http.put<Customers>(`${this.apiUrl}/${id}`, customers);
  }

  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
