import { TestBed } from '@angular/core/testing';

import { RolePreferenceService } from './rolePreference.service';

describe('RolePreferenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RolePreferenceService = TestBed.get(RolePreferenceService);
    expect(service).toBeTruthy();
  });
});
