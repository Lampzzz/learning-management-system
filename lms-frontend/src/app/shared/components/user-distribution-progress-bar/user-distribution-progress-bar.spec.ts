import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDistributionProgressBar } from './user-distribution-progress-bar';

describe('UserDistributionProgressBar', () => {
  let component: UserDistributionProgressBar;
  let fixture: ComponentFixture<UserDistributionProgressBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDistributionProgressBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDistributionProgressBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
