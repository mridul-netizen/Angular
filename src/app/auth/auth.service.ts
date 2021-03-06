import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresInL: string;
  localID: string;
}
@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyADSSVoLQxF_RG2gixhYoc31dj6WbJ4ZJI',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    );
  }
}
