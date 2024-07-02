import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  private apiUrl = 'http://localhost:8080/api/reports/orders';

  constructor(private http: HttpClient) { }

  downloadOrderReport() {
    const headers = new HttpHeaders().set('Accept', 'application/pdf');
    return this.http.get(this.apiUrl, { headers: headers, responseType: 'blob' as 'json' });
  }
}
