import { FirestoreService } from './../../services/firestore.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Portfolio } from 'src/app/interfaces/portfolio';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.css']
})
export class PortfolioCardComponent implements OnInit {

  // porfolio: Observable<Portfolio[]>;

  @Input() portfolios: Portfolio[];

  constructor() {

   }

  ngOnInit(): void {
    console.log('porfolio', this.portfolios);

  }

}
