import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Items } from '../models/items.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private apiUrl = 'http://localhost:8080/api/items';

  constructor(private http: HttpClient) { }

  getItems(): Observable<Items[]> {
    return this.http.get<Items[]>(this.apiUrl);
  }

  getItem(id: number): Observable<Items> {
    return this.http.get<Items>(`${this.apiUrl}/${id}`);
  }

  createItem(Items: Items): Observable<Items> {
    return this.http.post<Items>(this.apiUrl, Items);
  }

  updateItem(id: number, items: Items): Observable<Items> {
    return this.http.put<Items>(`${this.apiUrl}/${id}`, items);
  }

  deleteItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
