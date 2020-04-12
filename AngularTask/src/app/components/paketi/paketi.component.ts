import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PaketServiceService } from 'src/app/service/paket-service.service';
import { ActivatedRoute } from '@angular/router';
import { Paket } from 'src/app/model/Paket';
import { Operater } from 'src/app/model/Operater';
import { OperaterServiceService } from 'src/app/service/operater-service.service';

@Component({
  selector: 'app-paketi',
  templateUrl: './paketi.component.html',
  styleUrls: ['./paketi.component.css'],
})
export class PaketiComponent implements OnInit {
  paketi: Paket[];
  operateri: Operater[];
  formActive: boolean = false;

  @Output() onSubmit: EventEmitter<object> = new EventEmitter();

  constructor(
    private ps: PaketServiceService,
    private os: OperaterServiceService,
    private ar: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getPaketi();
    this.getOperateri();
  }

  getPaketi() {
    this.ps.getAll().subscribe((response) => (this.paketi = response));
  }

  getOperateri() {
    this.os.getAll().subscribe((response) => (this.operateri = response));
  }

  deletePaket(id: number) {
    this.ps.delete(id).subscribe((response) => this.getPaketi());
  }

  dodajNovog() {
    this.formActive = true;
  }

  save(noviPaket: Paket) {
    this.ps.save(noviPaket).subscribe((response) => {
      this.getPaketi();
      noviPaket = {
        id: null,
        naziv: null,
        operaterId: null,
        cena: null,
      };
      this.onSubmit.emit({ message: 'new paket added' });
    });
  }
}
