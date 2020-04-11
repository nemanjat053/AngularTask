import { Component, OnInit } from '@angular/core';
import { Paket } from '../model/Paket';
import { PaketServiceService } from '../service/paket-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-paket-edit',
  templateUrl: './paket-edit.component.html',
  styleUrls: ['./paket-edit.component.css'],
})
export class PaketEditComponent implements OnInit {
  paket: Paket = {
    id: null,
    operaterId: null,
    naziv: '',
    cena: null,
  };
  constructor(
    private ps: PaketServiceService,
    private r: Router,
    private ar: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ps
      .getOne(this.ar.snapshot.params['id'])
      .subscribe((response) => (this.paket = response));
  }

  submit() {
    this.ps
      .update(this.ar.snapshot.params['id'], this.paket)
      .subscribe((response) => this.r.navigate(['/paketi']));
  }
}
