import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KorisniciComponent } from './components/korisnici/korisnici.component';
import { OperateriComponent } from './components/operateri/operateri.component';
import { PaketiComponent } from './components/paketi/paketi.component';
import { KorisnikComponent } from './components/korisnik/korisnik.component';
import { PaketComponent } from './components/paket/paket.component';
import { OperaterComponent } from './components/operater/operater.component';
import { KorisnikEditComponent } from './components/korisnik-edit/korisnik-edit.component';
import { OperaterEditComponent } from './components/operater-edit/operater-edit.component';
import { PaketEditComponent } from './components/paket-edit/paket-edit.component';
import { KorisnikAddNewComponent } from './components/korisnik-add-new/korisnik-add-new.component';
import { OperaterAddNewComponent } from './components/operater-add-new/operater-add-new.component';
import { PaketAddNewComponent } from './components/paket-add-new/paket-add-new.component';

@NgModule({
  declarations: [
    AppComponent,
    KorisniciComponent,
    OperateriComponent,
    PaketiComponent,
    KorisnikComponent,
    PaketComponent,
    OperaterComponent,
    KorisnikEditComponent,
    OperaterEditComponent,
    PaketEditComponent,
    KorisnikAddNewComponent,
    OperaterAddNewComponent,
    PaketAddNewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
