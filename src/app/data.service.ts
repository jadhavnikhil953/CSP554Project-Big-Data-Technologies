import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = "http://localhost:4200";

  constructor(private http : HttpClient) { }

  // GET heroes whose name contains search term
  getPosts(data: any): Observable<any>{
    return this.http.request('POST', this.url+'/api/products', 
    {responseType:'json', headers: {'Content-Type': 'application/json'},body:data});
 }
 getAllOrders(data: any): Observable<any>{
  return this.http.request('POST', this.url+'/api/getAllOrders', 
  {responseType:'json', headers: {'Content-Type': 'application/json'},body:data});
}
}
