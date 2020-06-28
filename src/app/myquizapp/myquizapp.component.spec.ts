import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyquizappComponent } from './myquizapp.component';

describe('MyquizappComponent', () => {
  let component: MyquizappComponent;
  let fixture: ComponentFixture<MyquizappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyquizappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyquizappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
