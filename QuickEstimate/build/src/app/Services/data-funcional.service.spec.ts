import { TestBed, inject } from '@angular/core/testing';

import { DataFuncionalService } from './data-funcional.service';

describe('DataFuncionalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataFuncionalService]
    });
  });

  it('should ...', inject([DataFuncionalService], (service: DataFuncionalService) => {
    expect(service).toBeTruthy();
  }));
});
