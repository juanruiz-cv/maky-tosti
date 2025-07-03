import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SheetsService {
  private baseUrl = environment.BASE_URL;

  constructor(private http: HttpClient) {}

  enviarVenta(data: any): Observable<any> {
    const formData = new FormData();

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        formData.append(key, data[key]);
      }
    }

    return this.http.post(environment.BASE_URL, formData);
  }
}
