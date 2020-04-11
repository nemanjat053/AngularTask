import { Component, OnInit } from '@angular/core';
import { PaketServiceService } from 'src/app/service/paket-service.service';
import { ActivatedRoute } from '@angular/router';
import { Paket } from 'src/app/model/Paket';

@Component({
  selector: 'app-paket',
  templateUrl: './paket.component.html',
  styleUrls: ['./paket.component.css']
})
export class PaketComponent implements OnInit {

  paket: Paket = {
    id: null,
    operaterId: null,
    naziv: '',
    cena: null
  }

  constructor(private ps: PaketServiceService, private ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.getOne(this.ar.snapshot.params['id']);
  }


  getOne(id:number){
    this.ps.getOne(id).subscribe((response) => this.paket = response);
  }

  navigateToEdit(id: number){
    
  }

}
