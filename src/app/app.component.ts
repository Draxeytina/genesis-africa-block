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
    this.isMenuOpen = !this.isMenuOpen;
    this.isMenuOpen ? document.getElementById('mobile-menu-list')?.classList.remove('mobile-menu-list') : document.getElementById('mobile-menu-list')?.classList.add('mobile-menu-list');
  }

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
    document.body.classList.value == 'dark-theme' ? this.theme='Light Mode' : this.theme='Dark Mode';
  }
}
