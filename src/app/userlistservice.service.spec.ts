import { TestBed } from '@angular/core/testing';

import { UserlistserviceService } from './userlistservice.service';

describe('UserlistserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserlistserviceService = TestBed.get(UserlistserviceService);
    expect(service).toBeTruthy();
  });
});
