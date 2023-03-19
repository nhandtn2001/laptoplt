import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmonComponent } from './addmon.component';

describe('AddmonComponent', () => {
  let component: AddmonComponent;
  let fixture: ComponentFixture<AddmonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddmonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
