import { Component, OnInit } from '@angular/core';
import { Club, Player } from 'src/app/models/player.model';
import { TransfermarktApiService } from 'src/app/services/transfermarkt-api.service';

@Component({
  selector: 'app-premier-league',
  templateUrl: './premier-league.component.html',
  styleUrls: ['./premier-league.component.css']
})
export class PremierLeagueComponent implements OnInit {

  constructor(private api:TransfermarktApiService) {}

  data!: Club;

  ngOnInit(): void {
    this.api.getBundesligaClubs().subscribe(res=>{
      this.data = res;
    })
  }
}
