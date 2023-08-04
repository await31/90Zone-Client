import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { Country } from 'src/app/models/country.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.css']
})
export class EditCountryComponent implements OnInit {

    constructor(private countriesService:CountriesService, private route: ActivatedRoute, private router: Router) {}

    countryDetail: Country = {
      Id: '',
      Name: '',
      Continent: ''
    };

    ngOnInit(): void {
      this.route.paramMap.subscribe({
        next: (params) => {
          const id = params.get('id');
          
           if(id) {
            this.countriesService.getCountry(id)
            .subscribe({
              next: (response) => {
                this.countryDetail = response;
              }
            })
           }
        }
      })
    }

    editCountry() {
      this.countriesService.editCountry(this.countryDetail.Id, this.countryDetail)
      .subscribe({
        next: (response) => {
          this.router.navigate(['country'])
        }
      })
    }
}
