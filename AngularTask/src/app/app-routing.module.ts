import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KorisnikServiceService } from './service/korisnik-service.service';
import { PaketServiceService } from './service/paket-service.service';
import { OperaterServiceService } from './service/operater-service.service';
import { KorisniciComponent } from './components/korisnici/korisnici.component';
import { PaketiComponent } from './components/paketi/paketi.component';
import { OperateriComponent } from './components/operateri/operateri.component';
import { KorisnikComponent } from './components/korisnik/korisnik.component';
import { PaketComponent } from './paket/paket.component';
import { OperatorComponent } from './operator/operator.component';


const routes: Routes = [
  {path: 'korisnici', component:KorisniciComponent},
  {path: 'korisnici/:id', component: KorisnikComponent},

  {path: 'paketi', component:PaketiComponent},
  {path: 'paketi/:id', component: PaketComponent},

  {path: 'operatori', component: OperateriComponent},
  {path: 'operatori/:id', component: OperatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
