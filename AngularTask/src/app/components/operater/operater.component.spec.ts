import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperaterComponent } from './operater.component';

describe('OperaterComponent', () => {
  let component: OperaterComponent;
  let fixture: ComponentFixture<OperaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
