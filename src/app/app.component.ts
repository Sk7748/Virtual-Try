import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router: Router
    ) {}


  title = 'Final';

  navigateToBracelet() {
    this.router.navigate(['/bracelet']);
  }

  navigateToNecklaces() {
    this.router.navigate(['/necklace']);
  }

  navigateToEarrings() {
    this.router.navigate(['/earring']);
  }

  navigateToNoserings() {
    this.router.navigate(['/nosering']);
  }

}
