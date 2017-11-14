import { TestBed, inject } from '@angular/core/testing';

import { DescService } from './desc.service';

describe('DescService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DescService]
    });
  });

  it('should be created', inject([DescService], (service: DescService) => {
    expect(service).toBeTruthy();
  }));
});
