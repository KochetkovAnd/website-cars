import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnnouncementPageComponent } from './create-announcement-page.component';

describe('CreateAnnouncementPageComponent', () => {
  let component: CreateAnnouncementPageComponent;
  let fixture: ComponentFixture<CreateAnnouncementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAnnouncementPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAnnouncementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
