import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { LeaguesService } from 'src/app/services/leagues.service';
import { Country } from 'src/app/models/country.model';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { League } from 'src/app/models/league.model';

@Component({
  selector: 'app-edit-league',
  templateUrl: './edit-league.component.html',
  styleUrls: ['./edit-league.component.css']
})

export class EditLeagueComponent implements OnInit {

  countries: any[] = [];
  countryId: number = 0;

  constructor(private leaguesService: LeaguesService, private countriesService: CountriesService, private router: Router, private route: ActivatedRoute) { }

  leagueDetail: League = {
    Id: '',
    Name: ''
  };

  editLeague() {
    this.leaguesService.editLeague(this.leagueDetail.Id, this.leagueDetail, this.countryId)
    .subscribe({
      next: (response) => {
        this.router.navigate(['league'])
      }
    })
  }

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe({
      next: (countries) => {
        this.countries = countries;
      }
    })
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        
         if(id) {
          this.leaguesService.getLeague(id)
          .subscribe({
            next: (response) => {
              this.leagueDetail = response;
            }
          })
         }
      }
    })
  }

  getAllCountries() {
    this.countriesService.getAllCountries().subscribe(
      (res: any[]) => {
        this.countries = res;
      },
      error => {
        console.error(error);
      }
    );
  }

}
