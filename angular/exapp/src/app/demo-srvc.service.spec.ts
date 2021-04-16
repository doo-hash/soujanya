import { TestBed } from '@angular/core/testing';

import { DemoSrvcService } from './demo-srvc.service';

describe('DemoSrvcService', () => {
  let service: DemoSrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoSrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
