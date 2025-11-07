import { Component } from '@angular/core';
import { Persona } from '../../models/persona';

@Component({
  selector: 'app-personas-standalone',
  standalone: true,
  templateUrl: './personas-standalone.html',
  styleUrl: './personas-standalone.css',
})
export class PersonasStandalone {
  public personas!: Array<Persona>;
  constructor(){
    this.personas = new Array<Persona>();
    let p1 = new Persona(1, "AAA", "aaa", 22);
    this.personas.push(p1);
    let p2 = new Persona(2, "BBB", "bbb", 20);
    this.personas.push(p2);
    let p3 = new Persona(3, "CCC", "ccc", 18);
    this.personas.push(p3);
  }
}
