import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSponserComponent } from './add-sponser.component';

describe('AddSponserComponent', () => {
  let component: AddSponserComponent;
  let fixture: ComponentFixture<AddSponserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSponserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSponserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
