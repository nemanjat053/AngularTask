import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Operater } from 'src/app/model/Operater';

@Component({
  selector: 'app-operater-add-new',
  templateUrl: './operater-add-new.component.html',
  styleUrls: ['./operater-add-new.component.css'],
})
export class OperaterAddNewComponent implements OnInit {
  @Output() onSubmit: EventEmitter<Operater> = new EventEmitter();

  noviOperater: Operater = {
    id: null,
    naziv: null,
    pozivniBroj: null,
  };

  constructor() {}

  ngOnInit(): void {}

  submit() {
    this.onSubmit.emit(this.noviOperater);
  }
}
