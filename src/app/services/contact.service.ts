import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  endpoint = 'https://formspree.io/f/xjvjabkb';
  constructor(
    private http: HttpClient
  ) { }

  send(data) {
    return this.http.post(this.endpoint, {
      ... data
    });
  }
}
