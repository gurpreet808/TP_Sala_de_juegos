import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorRaceComponent } from './color-race.component';

describe('ColorRaceComponent', () => {
  let component: ColorRaceComponent;
  let fixture: ComponentFixture<ColorRaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorRaceComponent]
    });
    fixture = TestBed.createComponent(ColorRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
