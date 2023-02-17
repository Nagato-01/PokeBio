import { TestBed } from '@angular/core/testing';

import { AllMethodesService } from './all-methodes.service';

describe('AllMethodesService', () => {
  let service: AllMethodesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllMethodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
