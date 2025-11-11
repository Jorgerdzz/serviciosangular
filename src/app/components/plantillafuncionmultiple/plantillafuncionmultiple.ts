import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Plantilla } from '../../models/plantilla';
import { ServicePlantilla } from '../../services/service.plantillas';

@Component({
  selector: 'app-plantillafuncionmultiple',
  standalone: false,
  templateUrl: './plantillafuncionmultiple.html',
  styleUrl: './plantillafuncionmultiple.css',
})
export class Plantillafuncionmultiple implements OnInit{

  public funciones!: Array<string>;
  public plantillas!: Array<Plantilla>

  @ViewChild("selectfunciones") selectFunciones!: ElementRef;
  public funcionesSeleccionadas: Array<string>;

  constructor(private _service:ServicePlantilla){
    this.funcionesSeleccionadas = new Array<string>();
  }

  ngOnInit(): void {
    this.getFunciones();
  }

  getPlantillas(): void{
    let aux = new Array<string>();
    for(var option of this.selectFunciones.nativeElement.options){
      if(option.selected){
        aux.push(option.value)
      }
    }
    this.funcionesSeleccionadas = aux;
    this._service.getPlantillasFuncionMultiple(this.funcionesSeleccionadas).subscribe(response=>{
      this.plantillas = response;
    })
  }

  getFunciones(): void{
    this._service.getFunciones().subscribe(response=>{
      this.funciones = response
    })
  }

}
