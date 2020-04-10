import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KorisnikServiceService } from './service/korisnik-service.service';
import { PaketServiceService } from './service/paket-service.service';
import { OperaterServiceService } from './service/operater-service.service';
import { KorisniciComponent } from './components/korisnici/korisnici.component';
import { PaketiComponent } from './components/paketi/paketi.component';
import { OperateriComponent } from './components/operateri/operateri.component';


const routes: Routes = [
  {path: 'korisnici', component:KorisniciComponent},
  {path: 'paketi', component:PaketiComponent},
  {path: 'operatori', component: OperateriComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
