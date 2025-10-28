import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentCourseCard } from './recent-course-card';

describe('RecentCourseCard', () => {
  let component: RecentCourseCard;
  let fixture: ComponentFixture<RecentCourseCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentCourseCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentCourseCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
