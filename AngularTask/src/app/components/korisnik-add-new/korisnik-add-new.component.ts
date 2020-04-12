import { Component, OnInit, Input } from '@angular/core';
import { Paket } from 'src/app/model/Paket';
import { Korisnik } from 'src/app/model/Korisnik';

@Component({
  selector: 'app-korisnik-add-new',
  templateUrl: './korisnik-add-new.component.html',
  styleUrls: ['./korisnik-add-new.component.css'],
})
export class KorisnikAddNewComponent implements OnInit {
  @Input() paketi: Paket[];

  noviKorisnik: Korisnik = {
    id: null,
    broj: null,
    paketId: null,
    datumPrijave: null,
    datumOdjave: null,
  };

  constructor() {}

  ngOnInit(): void {}

  submit() {
    console.log(this.noviKorisnik);
  }

  selectPaket(id: number) {
    this.noviKorisnik.paketId = id;
  }
}
