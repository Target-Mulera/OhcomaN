import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ohcoma';
  isNavOpen: boolean = false;
  fillColor: string = '#00d9ff'; // or any other color valu

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

}
