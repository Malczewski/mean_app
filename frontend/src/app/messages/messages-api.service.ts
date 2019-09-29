import { Message } from './message';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesApiService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${environment.api}/messages`;
  }

  public findAll(): Observable<Message[]> {
    return this.http.get<Message[]>(this.baseUrl);
  }

  public save(message: Message) {
    return this.http.post<Message>(this.baseUrl, message);
  }
}
