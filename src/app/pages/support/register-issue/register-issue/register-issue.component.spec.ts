import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterIssueComponent } from './register-issue.component';

describe('RegisterIssueComponent', () => {
  let component: RegisterIssueComponent;
  let fixture: ComponentFixture<RegisterIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
