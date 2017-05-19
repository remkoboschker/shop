import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductLineComponent } from './edit-product-line.component';

describe('EditProductLineComponent', () => {
  let component: EditProductLineComponent;
  let fixture: ComponentFixture<EditProductLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
