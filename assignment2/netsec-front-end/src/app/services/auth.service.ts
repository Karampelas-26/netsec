import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { LoginCredentials } from '../LoginCredentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://83.212.97.112:8443/auth/';
  // private url = 'https://localhost:8443/auth/';

 
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }

  constructor(private http:HttpClient) {}
  
  login(credentials: LoginCredentials){
    return this.http.post(`${this.url}login`, credentials, this.httpOptions);
  }

  loggings(){
    let token = localStorage.getItem("token");
    let username = localStorage.getItem("username");
    let headers = this.httpOptions;
    headers.headers.append("Authorization", 'Bearer ' + token);
    return this.http.get(`${this.url}logging/${username}`, headers);
  }
}
