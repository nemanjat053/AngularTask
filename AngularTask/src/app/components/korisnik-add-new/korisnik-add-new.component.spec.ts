import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KorisnikAddNewComponent } from './korisnik-add-new.component';

describe('KorisnikAddNewComponent', () => {
  let component: KorisnikAddNewComponent;
  let fixture: ComponentFixture<KorisnikAddNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KorisnikAddNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KorisnikAddNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
