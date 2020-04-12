import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { KorisnikServiceService } from 'src/app/service/korisnik-service.service';
import { Router } from '@angular/router';
import { Korisnik } from 'src/app/model/Korisnik';
import { Paket } from 'src/app/model/Paket';
import { PaketServiceService } from 'src/app/service/paket-service.service';

@Component({
  selector: 'app-korisnici',
  templateUrl: './korisnici.component.html',
  styleUrls: ['./korisnici.component.css'],
})
export class KorisniciComponent implements OnInit {
  korisnici: Korisnik[];
  formaActive: boolean = false;

  paketi: Paket[];

  @Output() onSubmit: EventEmitter<object> = new EventEmitter();

  constructor(
    private ks: KorisnikServiceService,
    private ps: PaketServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getKorisnici();
    this.getPaketi();
  }

  getPaketi() {
    this.ps.getAll().subscribe((response) => (this.paketi = response));
  }

  getKorisnici() {
    this.ks.getAll().subscribe((response) => (this.korisnici = response));
  }

  deleteKorisnik(id: number) {
    this.ks.deleteOne(id).subscribe((response) => {
      this.getKorisnici();
    });
  }

  dodajNovog() {
    this.formaActive = true;
  }

  save(noviKorisnik: Korisnik) {
    this.ks.save(noviKorisnik).subscribe((response) => {
      this.getKorisnici();
      this.getPaketi();
      noviKorisnik = {
        id: null,
        broj: null,
        paketId: null,
        datumOdjave: null,
        datumPrijave: null,
      };
      this.onSubmit.emit({ message: 'data_changed' });
    });
  }
}
