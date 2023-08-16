import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransfermarktApiService } from 'src/app/services/transfermarkt-api.service';

@Component({
  selector: 'app-list-clubs',
  templateUrl: './list-clubs.component.html',
  styleUrls: ['./list-clubs.component.css']
})
export class ListClubsComponent implements OnInit {

  constructor(private api: TransfermarktApiService, private route: ActivatedRoute) { }

  public data: any;

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      if (url[0].path === 'bundesliga') {
        this.api.getBundesligaClubs().subscribe(res => {
          this.data = res;
        });
      } else if (url[0].path === 'premier-league') {
        this.api.getPremierLeagueClubs().subscribe(res => {
          this.data = res;
        });
      } else if (url[0].path === 'seria-a') {
        this.api.getSeriaAClubs().subscribe(res => {
          this.data = res;
        });
      } else if (url[0].path === 'la-liga') {
        this.api.getLaLigaClubs().subscribe(res => {
          this.data = res;
        });
      } else if (url[0].path === 'ligue-one') {
        this.api.getLigue1Clubs().subscribe(res => {
          this.data = res;
        });
      } else if (url[0].path === 'mls') {
        this.api.getMLSClubs().subscribe(res => {
          this.data = res;
        });
      } else if (url[0].path === 'spl') {
        this.api.getSPLClubs().subscribe(res => {
          this.data = res;
        });
      }
    });
  }
}
