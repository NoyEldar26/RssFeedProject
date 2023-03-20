import { TestBed } from '@angular/core/testing';

import { RssDataServiceService } from './rss-data-service.service';

describe('RssDataServiceService', () => {
  let service: RssDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RssDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
