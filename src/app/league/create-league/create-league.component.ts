import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country, CountryCreated } from 'src/app/models/country.model';
import { LeagueCreated } from 'src/app/models/league.model';
import { CountriesService } from 'src/app/services/countries.service';
import { LeaguesService } from 'src/app/services/leagues.service';

@Component({
  selector: 'app-create-league',
  templateUrl: './create-league.component.html',
  styleUrls: ['./create-league.component.css']
})
export class CreateLeagueComponent implements OnInit {

  countries: Country[] = [];

  addLeagueRequest: LeagueCreated = {
    Name: ''
  };
  
  countryId: number = 0;

  constructor(private leaguesService:LeaguesService, private countriesService: CountriesService, private router: Router) {}

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe({
      next: (countries) => {
       this.countries = countries;
      }
   })
  }

  addLeague() {
    this.leaguesService.addLeague(this.addLeagueRequest, this.countryId)
    .subscribe({
      next: (response) => {
        this.router.navigate(['league'])
      }
    })
  }

}
