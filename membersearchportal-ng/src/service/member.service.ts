import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Member } from 'src/models/member.model';
import { AppConfig } from 'src/config/app.config';


@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private header = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  constructor(private http: HttpClient, private config: AppConfig) { }

  getMembers() {
    return <Observable<Member[]>> this.http
      .get(`${this.config.apiUrl}/api/members`, { headers: this.header });
  }

  getMember(query: string) {
    return <Observable<Member>> this.http
      .get(`${this.config.apiUrl}/api/members/${query}`, { headers: this.header });
  }
}
