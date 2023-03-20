import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { News } from 'src/models/news';

@Injectable({
  providedIn: 'root'
})
export class RssDataService {
  
  ngOnInit(): void { };
  constructor(private http: HttpClient) { }

  urlServer = 'https://localhost:7247/api/rss';
  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.urlServer);
  }

}
