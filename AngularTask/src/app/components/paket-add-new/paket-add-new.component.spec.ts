import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaketAddNewComponent } from './paket-add-new.component';

describe('PaketAddNewComponent', () => {
  let component: PaketAddNewComponent;
  let fixture: ComponentFixture<PaketAddNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaketAddNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaketAddNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
