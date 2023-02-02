import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'genesis-block-africa';
  theme: string = 'Dark Mode';

  constructor(){

  }

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
    document.body.classList.value == 'dark-theme' ? this.theme='Light Mode' : this.theme='Dark Mode';
  }
}
