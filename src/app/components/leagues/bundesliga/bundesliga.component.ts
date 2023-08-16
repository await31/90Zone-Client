import { Component, OnInit } from '@angular/core';
import { Club } from 'src/app/models/player.model';
import { TransfermarktApiService } from 'src/app/services/transfermarkt-api.service';

@Component({
  selector: 'app-bundesliga',
  templateUrl: './bundesliga.component.html',
  styleUrls: ['./bundesliga.component.css']
})
export class BundesligaComponent implements OnInit {

  constructor(private api:TransfermarktApiService) {}

  ngOnInit(): void {
    
  }
}
