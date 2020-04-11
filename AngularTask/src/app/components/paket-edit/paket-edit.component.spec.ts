import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaketEditComponent } from './paket-edit.component';

describe('PaketEditComponent', () => {
  let component: PaketEditComponent;
  let fixture: ComponentFixture<PaketEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaketEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaketEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
