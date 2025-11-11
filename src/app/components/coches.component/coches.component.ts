import { Component, OnInit } from '@angular/core';
import { Coche } from '../../models/Coche';
import { ServiceCoche } from '../../services/service.coches';

@Component({
  selector: 'app-coches',
  standalone: false,
  templateUrl: './coches.component.html',
  styleUrl: './coches.component.css',
})
export class CochesComponent implements OnInit{

  public coches!: Array<Coche>;

  constructor(
    private _service:ServiceCoche
  ){}

  ngOnInit(): void {
    this.getCoches();
  }

  getCoches(): void{
    this._service.getCoches().then(result=>{
      this.coches = result;
    })
  }


}
