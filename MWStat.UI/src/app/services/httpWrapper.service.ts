import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class HttpWrapper {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),         
    withCredentials: true, 
    observe: 'response' as 'response'
    };

  constructor(private http: HttpClient) { }

  get(url: string): Observable<HttpResponse<any>>{
    return this.http.get<HttpResponse<any>>(url, this.httpOptions);
  }

  post(url: string, values: any): Observable<HttpResponse<any>>{
    return this.http.post<HttpResponse<any>>(url, values, this.httpOptions);
  }
}