import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../model/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  private usersUrl: string;
 
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/register';
  }
 
  public save(user: User) {
    return this.http.post(this.usersUrl, user);
  }
}