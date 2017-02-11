import { Component, OnInit } from '@angular/core';
import { WikipediaServiceService } from './wikipedia-service.service';

@Component({
  selector: 'app-wikipedia-search',
  templateUrl: './wikipedia-search.component.html',
  styleUrls: ['./wikipedia-search.component.css']
})
export class WikipediaSearchComponent {

  items: Array<string>;
  
  constructor(private wikiService: WikipediaServiceService) { }

  search(term: string) {
    this.wikiService.search(term)
          .then(items => this.items = items);
  }
  
}
