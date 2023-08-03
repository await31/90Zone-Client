import { Component, OnInit } from '@angular/core';
import { League } from 'src/app/models/league.model';
import { Country } from 'src/app/models/country.model';
import { CountriesService } from 'src/app/services/countries.service';
import { LeaguesService } from 'src/app/services/leagues.service';

@Component({
  selector: 'app-league-list',
  templateUrl: './league-list.component.html',
  styleUrls: ['./league-list.component.css']
})

export class LeagueListComponent implements OnInit {

  constructor(private leaguesService:LeaguesService, private countriesService:CountriesService) {}

   leagueList:League[]= [];
   countries:Country[]= [];
   //league: League;
   isEditing:boolean=false;

   ngOnInit(): void {
    this.RefreshLeagueList();
    this.countriesService.getAllCountries().subscribe({
      next: (countries) => {
       this.countries = countries;
      }
   })
   }

   RefreshLeagueList() {
    this.leaguesService.getAllLeagues().subscribe(data=> {this.leagueList = data;})
   }

  //  leagueDetail(league:League) {
  //    this.league = league;
  //    this.isEditing = true;
  //  }
}
