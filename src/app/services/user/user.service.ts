import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../model/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  private usersUrl: string;
  private loginUrl: string;
 
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/register';
    this.loginUrl = 'http://localhost:8080/login';
  }
 
  public save(user: User) {
    return this.http.post(this.usersUrl, user);
  }

  public login(user: User) {
    const body = {username: user.username, password: user.password};
    return this.http.post(this.loginUrl, body);
  }
}