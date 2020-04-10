import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KorisniciComponent } from './components/korisnici/korisnici.component';
import { OperateriComponent } from './components/operateri/operateri.component';
import { PaketiComponent } from './components/paketi/paketi.component';

@NgModule({
  declarations: [
    AppComponent,
    KorisniciComponent,
    OperateriComponent,
    PaketiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
