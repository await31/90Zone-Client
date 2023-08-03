import { Component, OnInit, Input } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-edit-league',
  templateUrl: './edit-league.component.html',
  styleUrls: ['./edit-league.component.css']
})
export class EditLeagueComponent implements OnInit {

    @Input() league:any
    leagueName: any;
    leagueId: any;
    countryId: any;
    countries: any[] = [];

    constructor(private service:SharedService, private countriesService:CountriesService) {}

    ngOnInit(): void {
      this.leagueId=this.league.Id;
      this.leagueName=this.league.Name;
      this.getAllCountries();
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

    // updateLeague(): void {
    //   const updatedLeague = {
    //     Id: this.leagueId,
    //     Name: this.leagueName,
    //     CountryId: this.countryId
    //   };

    //   this.service.updateLeague(this.leagueId, updatedLeague).subscribe(
    //     () => {
    //       console.log('League updated successfully');
    //     }
    //   );
    // }
}
