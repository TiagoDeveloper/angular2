import { Injectable } from '@angular/core';
import { URLSearchParams, Jsonp } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class WikipediaServiceService {

   times: number;

  constructor(private jsonp: Jsonp) { 
    this.times = 0;
  }

  search(term: string) {
    
    let wikiUrl = '//en.wikipedia.org/w/api.php';

    var params = new URLSearchParams();
    params.set('action', 'opensearch');
    params.set('search', term);
    params.set('format', 'json');
    params.set('callback', `__ng_jsonp__.__req${this.times}.finished`);

    this.times = this.times+1;

    return this.jsonp
                .get(wikiUrl, { search: params })
                .toPromise()
                .then((response) => <string[]>response.json()[3]);
  }
}
