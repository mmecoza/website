import { Injectable } from '@angular/core';
import {Email} from '../core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  sendEmail(bookEmail: Email): void {
  }
}
