import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) {
  }
  getUser(): Observable<any> {
    return this.http.get<any>('https://reqres.in/api/users?page={page');
  }

  getUserbyid(id: string): Observable<any> {
    return this.http.get<any>(`https://reqres.in/api/users/${id}`);
  }

}
