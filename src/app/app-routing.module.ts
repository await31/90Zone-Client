import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeagueComponent } from './league/league.component';
import { CountryComponent } from './country/country.component';
import { EditCountryComponent } from './country/edit-country/edit-country.component';
import { DeleteCountryComponent } from './country/delete-country/delete-country.component';
import { AddCountryComponent } from './country/add-country/add-country.component';
import { CreateLeagueComponent } from './league/create-league/create-league.component';
import { EditLeagueComponent } from './league/edit-league/edit-league.component';
import { DeleteLeagueComponent } from './league/delete-league/delete-league.component';

const routes: Routes = [
  {path: 'league',component:LeagueComponent},
  {path: 'league/add',component:CreateLeagueComponent},
  {path: 'league/edit/:id',component:EditLeagueComponent},
  {path: 'league/delete/:id',component:DeleteLeagueComponent},
  {path: 'country',component:CountryComponent},
  {path: 'country/add',component:AddCountryComponent},
  {path: 'country/edit/:id',component:EditCountryComponent},
  {path: 'country/delete/:id',component:DeleteCountryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
