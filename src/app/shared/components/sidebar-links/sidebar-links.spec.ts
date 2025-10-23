import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarLinks } from './sidebar-links';

describe('SidebarLinks', () => {
  let component: SidebarLinks;
  let fixture: ComponentFixture<SidebarLinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarLinks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarLinks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
