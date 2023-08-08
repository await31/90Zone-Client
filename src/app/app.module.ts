import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeagueComponent } from './components/league/league.component';
import { LeagueListComponent } from './components/league/league-list/league-list.component';
import { CreateLeagueComponent } from './components/league/create-league/create-league.component';
import { CountryComponent } from './components/country/country.component';
import { CountryListComponent } from './components/country/country-list/country-list.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditLeagueComponent } from './components/league/edit-league/edit-league.component';
import { AddCountryComponent } from './components/country/add-country/add-country.component';
import { EditCountryComponent } from './components/country/edit-country/edit-country.component';
import { DeleteCountryComponent } from './components/country/delete-country/delete-country.component';
import { DeleteLeagueComponent } from './components/league/delete-league/delete-league.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LeagueComponent,
    LeagueListComponent,
    CreateLeagueComponent,
    CountryComponent,
    CountryListComponent,
    EditLeagueComponent,
    AddCountryComponent,
    EditCountryComponent,
    DeleteCountryComponent,
    DeleteLeagueComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AdminSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
