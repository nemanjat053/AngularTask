import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KorisnikServiceService } from './service/korisnik-service.service';
import { PaketServiceService } from './service/paket-service.service';
import { OperaterServiceService } from './service/operater-service.service';
import { KorisniciComponent } from './components/korisnici/korisnici.component';
import { PaketiComponent } from './components/paketi/paketi.component';
import { OperateriComponent } from './components/operateri/operateri.component';
import { KorisnikComponent } from './components/korisnik/korisnik.component';
import { PaketComponent } from './components/paket/paket.component';
import { OperaterComponent } from './components/operater/operater.component';
import { AppComponent } from './app.component';
import { KorisnikEditComponent } from './korisnik-edit/korisnik-edit.component';
import { PaketEditComponent } from './paket-edit/paket-edit.component';
import { OperaterEditComponent } from './operater-edit/operater-edit.component';

const routes: Routes = [
  { path: 'korisnici', component: KorisniciComponent },
  { path: 'korisnici/:id', component: KorisnikComponent },
  { path: 'korisnici/:id/edit', component: KorisnikEditComponent },

  { path: 'paketi', component: PaketiComponent },
  { path: 'paketi/:id', component: PaketComponent },
  { path: 'paketi/:id/edit', component: PaketEditComponent },

  { path: 'operateri', component: OperateriComponent },
  { path: 'operateri/:id', component: OperaterComponent },
  { path: 'operateri/:id/edit', component: OperaterEditComponent },

  { path: '**', component: KorisniciComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
