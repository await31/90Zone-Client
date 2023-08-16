import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriaAComponent } from './seria-a.component';

describe('SeriaAComponent', () => {
  let component: SeriaAComponent;
  let fixture: ComponentFixture<SeriaAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeriaAComponent]
    });
    fixture = TestBed.createComponent(SeriaAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
