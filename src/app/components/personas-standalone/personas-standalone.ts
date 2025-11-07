import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona';
import { ServicePersonas } from '../../services/service.personas';

@Component({
  selector: 'app-personas-standalone',
  standalone: true,
  templateUrl: './personas-standalone.html',
  styleUrl: './personas-standalone.css',
  providers: [ServicePersonas]
})
export class PersonasStandalone implements OnInit{
  public personas!: Array<Persona>;

  constructor(private _service:ServicePersonas){
  }

  ngOnInit(): void {
    this._service.getPersonasPromise().then(response=>{
      this.personas = response
    });
  }
}
