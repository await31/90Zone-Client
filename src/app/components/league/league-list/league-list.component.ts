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

  leagues:League[]= [];
   
   ngOnInit(): void {
    this.leaguesService.getAllLeagues().subscribe({
      next: (leagues) => {
       this.leagues = leagues;
      }
   })
   }

}
