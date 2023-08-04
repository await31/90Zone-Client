import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLeagueComponent } from './delete-league.component';

describe('DeleteLeagueComponent', () => {
  let component: DeleteLeagueComponent;
  let fixture: ComponentFixture<DeleteLeagueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteLeagueComponent]
    });
    fixture = TestBed.createComponent(DeleteLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
