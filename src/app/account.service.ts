import { Injectable } from '@angular/core';
import { Account } from './account';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrlRoute = 'Account';
  constructor() { }
}