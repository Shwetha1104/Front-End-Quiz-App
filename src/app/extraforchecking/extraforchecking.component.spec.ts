import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraforcheckingComponent } from './extraforchecking.component';

describe('ExtraforcheckingComponent', () => {
  let component: ExtraforcheckingComponent;
  let fixture: ComponentFixture<ExtraforcheckingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraforcheckingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraforcheckingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
