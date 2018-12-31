import { TestBed } from '@angular/core/testing';

import { JwtAuthServiceService } from './jwt-auth-service.service';

describe('JwtAuthServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JwtAuthServiceService = TestBed.get(JwtAuthServiceService);
    expect(service).toBeTruthy();
  });
});
