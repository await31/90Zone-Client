import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-create-league',
  templateUrl: './create-league.component.html',
  styleUrls: ['./create-league.component.css']
})
export class CreateLeagueComponent implements OnInit {

  leagueName: any;
  countryId: any;
  countries: any[] = [];

  constructor(private service: SharedService) {}

  ngOnInit(): void {
    this.getAllCountries();
  }

  getAllCountries() {
    this.service.getAllCountries().subscribe(
      res => {
        this.countries = res; 
      },
      error => {
        console.error(error); 
      }
    );
  }

  createLeague() {
    this.service.createLeague(this.leagueName, this.countryId).subscribe(
      res => {
        alert(res.toString()); 
      }
    );
  }
}
