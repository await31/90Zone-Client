import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeagueComponent } from './league/league.component';
import { LeagueListComponent } from './league/league-list/league-list.component';
import { CreateLeagueComponent } from './league/create-league/create-league.component';
import { CountryComponent } from './country/country.component';
import { CountryListComponent } from './country/country-list/country-list.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditLeagueComponent } from './league/edit-league/edit-league.component';
import { AddCountryComponent } from './country/add-country/add-country.component';
import { EditCountryComponent } from './country/edit-country/edit-country.component';
import { DeleteCountryComponent } from './country/delete-country/delete-country.component';
import { DeleteLeagueComponent } from './league/delete-league/delete-league.component';

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
    DeleteLeagueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
