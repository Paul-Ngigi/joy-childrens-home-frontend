import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponserDetailsComponent } from './sponser-details.component';

describe('SponserDetailsComponent', () => {
  let component: SponserDetailsComponent;
  let fixture: ComponentFixture<SponserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponserDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SponserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
