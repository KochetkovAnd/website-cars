import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncementListPageComponent } from './annoncement-list-page.component';

describe('AnnoncementListPageComponent', () => {
  let component: AnnoncementListPageComponent;
  let fixture: ComponentFixture<AnnoncementListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnoncementListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnoncementListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
