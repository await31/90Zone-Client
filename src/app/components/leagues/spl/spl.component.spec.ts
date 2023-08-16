import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplComponent } from './spl.component';

describe('SplComponent', () => {
  let component: SplComponent;
  let fixture: ComponentFixture<SplComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplComponent]
    });
    fixture = TestBed.createComponent(SplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
