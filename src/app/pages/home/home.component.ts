import { FirestoreService } from './../../services/firestore.service';
import { Portfolio } from './../../interfaces/portfolio';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public portfolios: Portfolio[] = [];

  constructor( private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    this.getPortfolio();
  }

  getPortfolio() {
    return this.firestoreService.getPortfolio()
        .subscribe(portfolio => {
          this.portfolios = portfolio;
        });
  }

}
