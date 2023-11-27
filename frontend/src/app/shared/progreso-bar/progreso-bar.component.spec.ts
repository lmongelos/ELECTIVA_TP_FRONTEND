import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgresoBarComponent } from './progreso-bar.component';

describe('ProgresoBarComponent', () => {
  let component: ProgresoBarComponent;
  let fixture: ComponentFixture<ProgresoBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgresoBarComponent]
    });
    fixture = TestBed.createComponent(ProgresoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
