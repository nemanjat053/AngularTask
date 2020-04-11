import { Component, OnInit } from '@angular/core';
import { Operater } from 'src/app/model/Operater';
import { OperaterServiceService } from 'src/app/service/operater-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-operater-edit',
  templateUrl: './operater-edit.component.html',
  styleUrls: ['./operater-edit.component.css'],
})
export class OperaterEditComponent implements OnInit {
  operater: Operater = {
    id: null,
    naziv: '',
    pozivniBroj: '',
  };

  constructor(
    private os: OperaterServiceService,
    private ac: ActivatedRoute,
    private r: Router
  ) {}

  ngOnInit(): void {
    this.os
      .getOne(this.ac.snapshot.params['id'])
      .subscribe((response) => (this.operater = response));
  }

  submit() {
    this.os
      .update(this.ac.snapshot.params['id'], this.operater)
      .subscribe((response) => this.r.navigate(['/operateri']));
  }
}
