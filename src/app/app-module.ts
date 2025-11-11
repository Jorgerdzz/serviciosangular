import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { PersonasapiComponent } from './components/personasapi.component/personasapi.component';
import { ServicePersonas } from './services/service.personas';
import { PersonasStandalone } from './components/personas-standalone/personas-standalone';
import { CochesComponent } from './components/coches.component/coches.component';
import { ServiceCoche } from './services/service.coches';
import { Plantillafuncionsimple } from './components/plantillafuncionsimple/plantillafuncionsimple';
import { MenuComponent } from './components/menu.component/menu.component';
import { ServicePlantilla } from './services/service.plantillas';
import { FormsModule } from '@angular/forms';
import { Plantillafuncionmultiple } from './components/plantillafuncionmultiple/plantillafuncionmultiple';

@NgModule({
  declarations: [
    App,
    PersonasapiComponent,
    CochesComponent,
    Plantillafuncionsimple,
    MenuComponent,
    Plantillafuncionmultiple,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonasStandalone,  
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    ServicePersonas,
    ServiceCoche,
    ServicePlantilla
  ],
  bootstrap: [App]
})
export class AppModule { }
