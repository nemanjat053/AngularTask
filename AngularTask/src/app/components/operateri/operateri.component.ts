import { Component, OnInit } from '@angular/core';
import { Operater } from 'src/app/model/Operater';
import { OperaterServiceService } from 'src/app/service/operater-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-operateri',
  templateUrl: './operateri.component.html',
  styleUrls: ['./operateri.component.css']
})
export class OperateriComponent implements OnInit {

  operateri: Operater[];

  constructor(private os: OperaterServiceService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getOperatere();
  }

  getOperatere(){
    this.os.getAll().subscribe((response) => this.operateri = response);
  }

  deleteOperater(id: number){
    this.os.delete(id).subscribe((response) => this.getOperatere());
  }

}
