/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OtherOtherService } from './other-other.service';

describe('OtherOtherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OtherOtherService]
    });
  });

  it('should ...', inject([OtherOtherService], (service: OtherOtherService) => {
    expect(service).toBeTruthy();
  }));
});
