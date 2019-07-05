import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistDetailComponent } from './userlist-detail.component';

describe('UserlistDetailComponent', () => {
  let component: UserlistDetailComponent;
  let fixture: ComponentFixture<UserlistDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserlistDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlistDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
