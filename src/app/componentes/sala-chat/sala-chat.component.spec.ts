import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaChatComponent } from './sala-chat.component';

describe('SalaChatComponent', () => {
  let component: SalaChatComponent;
  let fixture: ComponentFixture<SalaChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalaChatComponent]
    });
    fixture = TestBed.createComponent(SalaChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
