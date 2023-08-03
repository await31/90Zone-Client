import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country.model';
import { CountriesService } from 'src/app/services/countries.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-create-league',
  templateUrl: './create-league.component.html',
  styleUrls: ['./create-league.component.css']
})
export class CreateLeagueComponent implements OnInit {

  leagueName: any;
  leagueId: any;
  countryId: any;
  countries: Country[] = [];

  constructor(private service: SharedService, countriesService: CountriesService) {}

  ngOnInit(): void {
    //this.getAllCountries();
  }

}
