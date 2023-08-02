import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-league-list',
  templateUrl: './league-list.component.html',
  styleUrls: ['./league-list.component.css']
})

export class LeagueListComponent implements OnInit {

   constructor(private service:SharedService) {}

   leagueList:any=[];
   league: any;
   isEditing:boolean=false;

   ngOnInit(): void {
     this.RefreshLeagueList();
   }

   RefreshLeagueList() {
    this.service.getAllLeagues().subscribe(data=> {this.leagueList = data;})
   }

   leagueDetail(league:any) {
     this.league = league;
     this.isEditing = true;
   }
}
