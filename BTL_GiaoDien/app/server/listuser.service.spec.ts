import { TestBed } from '@angular/core/testing';

import { ListuserService } from './listuser.service';

describe('ListuserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListuserService = TestBed.get(ListuserService);
    expect(service).toBeTruthy();
  });
});
