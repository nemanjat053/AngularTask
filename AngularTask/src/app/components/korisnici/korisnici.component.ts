import { Component, OnInit } from '@angular/core';
import { KorisnikServiceService } from 'src/app/service/korisnik-service.service';
import { Router } from '@angular/router';
import { Korisnik } from 'src/app/model/Korisnik';

@Component({
  selector: 'app-korisnici',
  templateUrl: './korisnici.component.html',
  styleUrls: ['./korisnici.component.css']
})
export class KorisniciComponent implements OnInit {

  korisnici: Korisnik[];

  constructor(private ks: KorisnikServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getArtikli();
  }

  getArtikli(){
    this.ks.getAll().subscribe((response) => (this.korisnici = response));
  }

}
