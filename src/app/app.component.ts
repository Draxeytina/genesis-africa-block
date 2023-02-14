import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'genesis-block-africa';
  theme: string = 'Dark Mode';
  isMenuOpen = false;
  

  constructor(){
  }

  toggleMenu(): void {

    this.isMenuOpen = !this.isMenuOpen; // Toggle menu

    // Toggle modal
    this.isMenuOpen
    ? document.getElementById('mobile-menu-list')?.classList.remove('mobile-menu-list')
    : document.getElementById('mobile-menu-list')?.classList.add('mobile-menu-list');

    // Toggle top-nav display
    this.isMenuOpen
    ? document.getElementById('mobile-top-nav')?.classList.add('top-nav')
    : document.getElementById('mobile-top-nav')?.classList.remove('top-nav');
    
    if (this.isMenuOpen) {
      document.getElementById('hamburger')?.children[0].classList.remove('close');
      document.getElementById('hamburger')?.children[2].classList.remove('burger-close-1');
      document.getElementById('hamburger')?.children[1].classList.remove('burger-close-2');
    } else {
      document.getElementById('hamburger')?.children[0].classList.add('close');
      document.getElementById('hamburger')?.children[2].classList.add('burger-close-1');
      document.getElementById('hamburger')?.children[1].classList.add('burger-close-2');
    }
  }

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
    document.body.classList.value == 'dark-theme' ? this.theme='Light Mode' : this.theme='Dark Mode';
  }
}
