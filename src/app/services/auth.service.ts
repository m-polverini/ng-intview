import { Injectable } from '@angular/core';
import { Credentials } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated(): boolean {
    return true;
  }

  login(credentials: Credentials) {}

  constructor() {}
}
