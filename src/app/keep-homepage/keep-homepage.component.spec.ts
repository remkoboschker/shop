import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepHomepageComponent } from './keep-homepage.component';

describe('KeepHomepageComponent', () => {
  let component: KeepHomepageComponent;
  let fixture: ComponentFixture<KeepHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeepHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeepHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
