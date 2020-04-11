import { Component, OnInit } from '@angular/core';
import { OperaterServiceService } from 'src/app/service/operater-service.service';
import { ActivatedRoute } from '@angular/router';
import { Operater } from 'src/app/model/Operater';

@Component({
  selector: 'app-operater',
  templateUrl: './operater.component.html',
  styleUrls: ['./operater.component.css'],
})
export class OperaterComponent implements OnInit {
  operater: Operater = {
    id: null,
    naziv: '',
    pozivniBroj: null,
  };

  constructor(private os: OperaterServiceService, private ac: ActivatedRoute) {}

  ngOnInit(): void {
    this.getOne(this.ac.snapshot.params['id']);
  }

  getOne(id: number) {
    this.os.getOne(id).subscribe((response) => (this.operater = response));
  }

  navigateToEdit(id: number) {}
}
