import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit, OnDestroy {

  private redirectInterval;
  counter = 5;
  
  constructor(private readonly router: Router) { }

  ngOnInit() {
    this.redirectActive();
  }

  // Redirect after 3 seconds
  private redirectActive(): void {
    this.redirectInterval = setInterval(() => {
      this.counter--;
      if (this.counter === 0) {
        this.router.navigate(['/']);
      }
    }, 1000);
  }

  ngOnDestroy() {
    if (this.redirectInterval) {
      clearInterval(this.redirectInterval);
    }
  }

}
