import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  englishResume() {
    this.router.navigateByUrl('http://www.ticketinteligente.com/portfolio-imgs/CV_ALAN_MUNOZ_English.pdf');
  }
  spanishResume() {
    this.router.navigateByUrl('http://www.ticketinteligente.com/portfolio-imgs/CV_ALAN_MUNOZ_Espanol.pdf');
  }

}
