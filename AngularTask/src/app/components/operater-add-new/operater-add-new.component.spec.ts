import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperaterAddNewComponent } from './operater-add-new.component';

describe('OperaterAddNewComponent', () => {
  let component: OperaterAddNewComponent;
  let fixture: ComponentFixture<OperaterAddNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperaterAddNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperaterAddNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
