import { Component, OnInit } from '@angular/core';
import { Korisnik } from 'src/app/model/Korisnik';
import { KorisnikServiceService } from 'src/app/service/korisnik-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-korisnik',
  templateUrl: './korisnik.component.html',
  styleUrls: ['./korisnik.component.css'],
})
export class KorisnikComponent implements OnInit {
  korisnik: Korisnik = {
    id: null,
    paketId: null,
    broj: '',
    datumPrijave: '',
    datumOdjave: null,
  };

  constructor(
    private ks: KorisnikServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getKorisnik();
  }

  getKorisnik() {
    this.ks
      .getOne(this.activatedRoute.snapshot.params['id'])
      .subscribe((response) => (this.korisnik = response));
  }

  navigateToEdit(id: number) {
    this.router.navigate(['/korisnici', id, 'edit']);
  }
}
