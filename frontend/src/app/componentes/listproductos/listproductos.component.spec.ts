import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListproductosComponent } from './listproductos.component';

describe('ListproductosComponent', () => {
  let component: ListproductosComponent;
  let fixture: ComponentFixture<ListproductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListproductosComponent]
    });
    fixture = TestBed.createComponent(ListproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
