import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRolePreferenceComponent } from './list-role-preference.component';

describe('ListRolePreferenceComponent', () => {
  let component: ListRolePreferenceComponent;
  let fixture: ComponentFixture<ListRolePreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRolePreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRolePreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
