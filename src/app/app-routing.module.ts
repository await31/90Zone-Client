import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeagueComponent } from './league/league.component';
import { CountryComponent } from './country/country.component';

const routes: Routes = [
  {path: 'league',component:LeagueComponent},
  {path: 'country',component:CountryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
