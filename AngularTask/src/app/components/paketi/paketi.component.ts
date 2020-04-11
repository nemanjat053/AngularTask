import { Component, OnInit } from '@angular/core';
import { PaketServiceService } from 'src/app/service/paket-service.service';
import { ActivatedRoute } from '@angular/router';
import { Paket } from 'src/app/model/Paket';

@Component({
  selector: 'app-paketi',
  templateUrl: './paketi.component.html',
  styleUrls: ['./paketi.component.css']
})
export class PaketiComponent implements OnInit {

  paketi: Paket[];

  constructor(private ps: PaketServiceService, private ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPaketi();
  }

  getPaketi(){
    this.ps.getAll().subscribe((response) => this.paketi = response);
  }

  deletePaket(id: number){
    this.ps.delete(id).subscribe((response) => this.getPaketi());
  }

}
