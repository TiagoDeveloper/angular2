/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WikipediaServiceService } from './wikipedia-service.service';

describe('WikipediaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WikipediaServiceService]
    });
  });

  it('should ...', inject([WikipediaServiceService], (service: WikipediaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
