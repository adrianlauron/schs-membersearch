import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { AppConfig } from 'src/config/app.config';
import { SearchResult } from 'src/models/searchresult.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private header = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  constructor(private http: HttpClient, private config: AppConfig) { }

  getSearchResult() {
    return <Observable<Array<SearchResult>>> this.http
      .get(`${this.config.apiUrl}/api/search`, { headers: this.header });
  }

  saveSearch(result: any) {
    return <Observable<any>> this.http
      .post(`${this.config.apiUrl}/api/search`, result, { headers: this.header });
  }
}
