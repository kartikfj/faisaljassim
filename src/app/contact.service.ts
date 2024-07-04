import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private firestore: AngularFirestore) { }

  // Method to add data to a Firestore collection
  addContact(contactData: any) {
    return this.firestore.collection('contact').add(contactData);
  }
  // Optional: Method to fetch data from a Firestore collection
  getContacts(): Observable<any[]> {
    return this.firestore.collection('contacts').valueChanges();
  }
}
