import { Component, OnInit, Input } from '@angular/core';
import { Paket } from 'src/app/model/Paket';

@Component({
  selector: 'app-korisnik-add-new',
  templateUrl: './korisnik-add-new.component.html',
  styleUrls: ['./korisnik-add-new.component.css'],
})
export class KorisnikAddNewComponent implements OnInit {
  @Input() paketi: Paket[];
  constructor() {}

  ngOnInit(): void {}

  submit() {}

  selectRacun(id: number) {}
}
