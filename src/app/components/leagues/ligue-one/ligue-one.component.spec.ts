import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigueOneComponent } from './ligue-one.component';

describe('LigueOneComponent', () => {
  let component: LigueOneComponent;
  let fixture: ComponentFixture<LigueOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LigueOneComponent]
    });
    fixture = TestBed.createComponent(LigueOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
