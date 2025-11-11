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

@NgModule({
  declarations: [
    App,
    PersonasapiComponent,
    CochesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonasStandalone
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    ServicePersonas,
    ServiceCoche
  ],
  bootstrap: [App]
})
export class AppModule { }
