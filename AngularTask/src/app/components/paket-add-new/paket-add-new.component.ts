import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Operater } from 'src/app/model/Operater';
import { Paket } from 'src/app/model/Paket';

@Component({
  selector: 'app-paket-add-new',
  templateUrl: './paket-add-new.component.html',
  styleUrls: ['./paket-add-new.component.css'],
})
export class PaketAddNewComponent implements OnInit {
  @Input() operateri: Operater[];
  @Output() onSubmit: EventEmitter<Paket> = new EventEmitter();

  noviPaket: Paket = {
    id: null,
    naziv: null,
    cena: null,
    operaterId: null,
  };

  constructor() {}

  ngOnInit(): void {}

  onChangeHandler(event: any) {
    this.operateri.forEach((operater) => {
      if (event.target.value === operater.naziv) {
        this.noviPaket.operaterId = operater.id;
      }
    });
  }

  submit() {
    this.onSubmit.emit(this.noviPaket);
  }
}
