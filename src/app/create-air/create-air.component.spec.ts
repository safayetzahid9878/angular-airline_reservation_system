import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAirComponent } from './create-air.component';

describe('CreateAirComponent', () => {
  let component: CreateAirComponent;
  let fixture: ComponentFixture<CreateAirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
