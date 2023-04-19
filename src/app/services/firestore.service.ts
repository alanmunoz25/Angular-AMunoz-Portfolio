import { Portfolio } from './../interfaces/portfolio';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {

  private portfolio: Observable<Portfolio[]>;
  private portfolioCollection: AngularFirestoreCollection<Portfolio>;

  constructor( private firebaseService: AngularFirestore) {
    this.portfolioCollection = this.firebaseService.collection<Portfolio>('amunoz-portfolio');

    this.portfolio = this.portfolioCollection.snapshotChanges().pipe(
      map(
        portfolio => {
          return portfolio.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        }
      )
    );
   }

   getPortfolio() {
     return this.portfolio;
   }
}
