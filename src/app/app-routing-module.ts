import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasapiComponent } from './components/personasapi.component/personasapi.component';
import { PersonasStandalone } from './components/personas-standalone/personas-standalone';
import { CochesComponent } from './components/coches.component/coches.component';
import { Plantillafuncionsimple } from './components/plantillafuncionsimple/plantillafuncionsimple';
import { Plantillafuncionmultiple } from './components/plantillafuncionmultiple/plantillafuncionmultiple';

const routes: Routes = [
  {path: "", component: PersonasapiComponent},
  {path: "personasstandalone", component: PersonasStandalone},
  {path: "coches", component: CochesComponent},
  {path: "plantillafuncionsimple", component:Plantillafuncionsimple},
  {path: "plantillafuncionmultiple", component: Plantillafuncionmultiple}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
