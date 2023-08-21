import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Club, Player } from 'src/app/models/player.model';
import { TransfermarktApiService } from 'src/app/services/transfermarkt-api.service';

@Component({
  selector: 'app-club-details',
  templateUrl: './club-details.component.html',
  styleUrls: ['./club-details.component.css']
})
export class ClubDetailsComponent implements OnInit {

  constructor(private transfermarktServices:TransfermarktApiService, private route: ActivatedRoute, private router: Router) {}

  listPlayers: any = {
    players: []
  };

  clubDetail: Club = {
    id: '',
    url: '',
    name: '',
    officialName: '',
    image: '',
    legalForm: '',
    addressLine1: '',
    addressLine2: '',
    addressLine3: '',
    tel: '',
    fax: '',
    website: '',
    foundedOn: '',
    members: '',
    membersDate: '',
    otherSports: [],
    colors: [],
    stadiumName: '',
    stadiumSeats: '',
    currentTransferRecord: '',
    currentMarketValue: '',
    squad: {
      size:'',
      averageAge:'',
      foreigners:'',
      nationalTeamPlayers:''
    },
    league:{
      id:'',
      name:'',
      countryID:'',
      countryName:'',
      tier:''
    },
    historicalCrests:[]
  };
  
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const clubId = params.get('id');
  
        if (clubId) {

          this.transfermarktServices.getClubDetails(clubId)
            .subscribe({
              next: (response) => {
                this.clubDetail = response;
              }
            });

            this.transfermarktServices.getAllPlayersOfClub(clubId)
            .subscribe({
              next: (response) => {
                this.listPlayers = response;
              }
            });
        }
      }
    });
  }
  
}
