import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-edit-league',
  templateUrl: './edit-league.component.html',
  styleUrls: ['./edit-league.component.css']
})
export class EditLeagueComponent implements OnInit {

    @Input() league:any
    leagueName:any;

    constructor(private service:SharedService) {}

    ngOnInit(): void {
      this.leagueName=this.league.Name;
    }


}
