import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryCreated } from 'src/app/models/country.model';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {

  ngOnInit(): void {

  }

  constructor(private countriesServices: CountriesService, private router: Router) { }

  addCountryRequest: CountryCreated = {
    Name: '',
    Continent: ''
  };

  addCountry() {
    this.countriesServices.addCountry(this.addCountryRequest)
    .subscribe({
      next: (response) => {
        this.router.navigate(['country'])
      }
    })
  }
}
