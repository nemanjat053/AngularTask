import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaketiComponent } from './paketi.component';

describe('PaketiComponent', () => {
  let component: PaketiComponent;
  let fixture: ComponentFixture<PaketiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaketiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaketiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
