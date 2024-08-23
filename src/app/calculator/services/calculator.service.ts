import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private apiUrl = 'https://api.mathjs.org/v4/';

  constructor(private http: HttpClient) {}

  calculate(expression: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}?expr=${encodeURIComponent(expression)}`);
  }
}
