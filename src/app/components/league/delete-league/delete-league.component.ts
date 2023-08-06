import { Component, OnInit } from '@angular/core';
import { LeaguesService } from 'src/app/services/leagues.service';
import { ActivatedRoute, Router } from '@angular/router';
import { League } from 'src/app/models/league.model';

@Component({
  selector: 'app-delete-league',
  templateUrl: './delete-league.component.html',
  styleUrls: ['./delete-league.component.css']
})
export class DeleteLeagueComponent implements OnInit {

  constructor(private leaguesService: LeaguesService,private route: ActivatedRoute, private router: Router) {}

  leagueDetail: League = {
    Id: '',
    Name: '',
    Country: undefined
  };

  ngOnInit(): void {
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

  deleteLeague() {
    this.leaguesService.deleteLeague(this.leagueDetail.Id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['league'])
      }
    })
  }

}
