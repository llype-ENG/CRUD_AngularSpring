import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { App } from './app';
import { ModuloComponentModule } from './components/modulo-component/modulo-component-module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FilmDetails } from './components/film-details/film-details';


@NgModule({
  declarations: [
    App,
    FilmDetails,
  ],
  imports: [
    BrowserModule,
    ModuloComponentModule,
    
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [App]
})
export class AppModule { }
