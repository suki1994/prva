import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBook } from './model/book';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
private Url: string = "/assets/data/books.json";
  constructor(private http: HttpClient) { }

  getBooks(): Observable<IBook[]>{
    return this.http.get<IBook[]>(this.Url);
  }


}
