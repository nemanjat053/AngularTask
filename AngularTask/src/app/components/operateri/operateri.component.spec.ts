import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperateriComponent } from './operateri.component';

describe('OperateriComponent', () => {
  let component: OperateriComponent;
  let fixture: ComponentFixture<OperateriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperateriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperateriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
