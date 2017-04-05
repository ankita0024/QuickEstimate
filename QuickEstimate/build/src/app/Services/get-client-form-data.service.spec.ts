import { TestBed, inject } from '@angular/core/testing';

import { GetClientFormDataService } from './get-client-form-data.service';

describe('GetClientFormDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetClientFormDataService]
    });
  });

  it('should ...', inject([GetClientFormDataService], (service: GetClientFormDataService) => {
    expect(service).toBeTruthy();
  }));
});
