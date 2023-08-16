import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Club } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly APIUrl = "https://localhost:7109/api/Setup";

  readonly TransfermarktAPI = "https://transfermarkt-api.vercel.app";

  constructor(private http: HttpClient, private router: Router) { }

  getAllUsers() {
    return this.http.get<any>(this.APIUrl +'/GetAllUsers');
  }

  getAllRoles() {
    return this.http.get<any>(this.APIUrl +'/GetAllRoles');
  }

  getAllPlayers():Observable<Club> {
    return this.http.get<Club>(this.TransfermarktAPI +'/clubs/27/players');
  }
}
