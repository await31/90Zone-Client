import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  constructor(private service:SharedService) {}

  countryList:any=[];

  ngOnInit(): void {
    this.RefreshCountryList();
  }

  RefreshCountryList() {
   this.service.getAllCountries().subscribe(data=> {this.countryList = data;})
  }
}
