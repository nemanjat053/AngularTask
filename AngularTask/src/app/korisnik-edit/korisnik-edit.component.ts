import { Component, OnInit } from '@angular/core';
import { KorisnikServiceService } from '../service/korisnik-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Korisnik } from '../model/Korisnik';

@Component({
  selector: 'app-korisnik-edit',
  templateUrl: './korisnik-edit.component.html',
  styleUrls: ['./korisnik-edit.component.css'],
})
export class KorisnikEditComponent implements OnInit {
  korisnik: Korisnik = {
    id: null,
    broj: '',
    paketId: null,
    datumOdjave: null,
    datumPrijave: '',
  };
  constructor(
    private ks: KorisnikServiceService,
    private ar: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ks
      .getOne(this.ar.snapshot.params['id'])
      .subscribe((response) => (this.korisnik = response));
  }

  submit() {
    this.ks
      .update(this.ar.snapshot.params['id'], this.korisnik)
      .subscribe((response) => this.router.navigate(['/korisnici']));
  }
}
