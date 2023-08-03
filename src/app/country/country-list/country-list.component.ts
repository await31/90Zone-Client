import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country.model';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  constructor(private countriesService:CountriesService) {}

  countries:Country[]= [];

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe({
           next: (countries) => {
            this.countries = countries;
           }
        })
  }
}


