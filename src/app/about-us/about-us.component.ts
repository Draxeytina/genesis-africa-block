import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'home',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('Genesis Block Africa About Us');
    this.metaService.updateTag({
      name: 'description',
      content: 'Find out more about Genesis Real Estate Africa',
    });
  }
}
