import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  keywords = {
    name: 'keywords',
    content: 'real estate, property development, genesis block africa',
  };

  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('Genesis Block Africa Home');
    this.metaService.updateTag({
      name: 'description',
      content:
        'Improve your lifestyle by upgrading your realestate with Genesis Block Africa',
    });
    this.metaService.addTag(this.keywords, true);
  }
}
