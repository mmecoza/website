import { Injectable } from '@angular/core';
import {Email} from '../core';
import {AngularFirestore} from '@angular/fire/firestore';
import {objClean} from './utils';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(
    private db: AngularFirestore
  ) { }

  async sendEmail(bookEmail: Email): Promise<void> {
    await this.db.collection('messages')
      .doc()
      .set(objClean(bookEmail)).catch();
  }
}
