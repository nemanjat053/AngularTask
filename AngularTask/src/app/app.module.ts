import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KorisniciComponent } from './components/korisnici/korisnici.component';
import { OperateriComponent } from './components/operateri/operateri.component';
import { PaketiComponent } from './components/paketi/paketi.component';
import { KorisnikComponent } from './components/korisnik/korisnik.component';
import { PaketComponent } from './paket/paket.component';
import { OperatorComponent } from './operator/operator.component';

@NgModule({
  declarations: [
    AppComponent,
    KorisniciComponent,
    OperateriComponent,
    PaketiComponent,
    KorisnikComponent,
    PaketComponent,
    OperatorComponent
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
