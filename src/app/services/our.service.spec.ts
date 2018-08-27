import { TestBed, inject } from '@angular/core/testing';

import { OurService } from './our.service';

describe('OurService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OurService]
    });
  });

  it('should be created', inject([OurService], (service: OurService) => {
    expect(service).toBeTruthy();
  }));
});
