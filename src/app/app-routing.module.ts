import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeagueComponent } from './components/league/league.component';
import { CountryComponent } from './components/country/country.component';
import { EditCountryComponent } from './components/country/edit-country/edit-country.component';
import { DeleteCountryComponent } from './components/country/delete-country/delete-country.component';
import { AddCountryComponent } from './components/country/add-country/add-country.component';
import { CreateLeagueComponent } from './components/league/create-league/create-league.component';
import { EditLeagueComponent } from './components/league/edit-league/edit-league.component';
import { DeleteLeagueComponent } from './components/league/delete-league/delete-league.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'league',component:LeagueComponent},
  {path: 'league/add',component:CreateLeagueComponent},
  {path: 'league/edit/:id',component:EditLeagueComponent},
  {path: 'league/delete/:id',component:DeleteLeagueComponent},
  {path: 'country',component:CountryComponent},
  {path: 'country/add',component:AddCountryComponent},
  {path: 'country/edit/:id',component:EditCountryComponent},
  {path: 'country/delete/:id',component:DeleteCountryComponent},
  {path: 'login',component:LoginComponent},
  {path: 'dashboard',component:DashboardComponent, canActivate:[AuthGuard]},
  {path: 'sign-up',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
