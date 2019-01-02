import { TestBed } from '@angular/core/testing';

import { UserRoleService } from './userRole.service';

describe('UserRoleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserRoleService = TestBed.get(UserRoleService);
    expect(service).toBeTruthy();
  });
});
