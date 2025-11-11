import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Plantilla } from '../../models/plantilla';
import { ServicePlantilla } from '../../services/service.plantillas';

@Component({
  selector: 'app-plantillafuncionsimple',
  standalone: false,
  templateUrl: './plantillafuncionsimple.html',
  styleUrl: './plantillafuncionsimple.css',
})
export class Plantillafuncionsimple implements OnInit{

  public plantilla!: Array<Plantilla>
  public funciones!: Array<string>
  @ViewChild("selectfuncion") selectFuncion!: ElementRef

  constructor(
    private _service:ServicePlantilla
  ){}

  ngOnInit(): void {
    this.getFunciones();
  }

  getPlantillas(): void{
    let funcion = this.selectFuncion.nativeElement.value;
    this._service.getPlantillas(funcion).then(response=>{
      this.plantilla = response;
    })
  }

  getFunciones(): void{
    this._service.getFunciones().subscribe(response=>{
      this.funciones = response
    })
  }

}
