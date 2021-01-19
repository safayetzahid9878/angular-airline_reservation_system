import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanedetailsComponent } from './planedetails.component';

describe('PlanedetailsComponent', () => {
  let component: PlanedetailsComponent;
  let fixture: ComponentFixture<PlanedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
