import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperaterEditComponent } from './operater-edit.component';

describe('OperaterEditComponent', () => {
  let component: OperaterEditComponent;
  let fixture: ComponentFixture<OperaterEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperaterEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperaterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
