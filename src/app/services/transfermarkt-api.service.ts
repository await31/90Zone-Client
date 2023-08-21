import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Club, Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class TransfermarktApiService {

  readonly TransfermarktAPI = "https://transfermarkt-api.vercel.app";

  constructor(private http: HttpClient) { }

  getPremierLeagueClubs():Observable<Club> {
    return this.http.get<Club>(this.TransfermarktAPI +'/competitions/GB1/clubs');
  }
  getLaLigaClubs():Observable<Club> {
    return this.http.get<Club>(this.TransfermarktAPI +'/competitions/ES1/clubs');
  }
  getBundesligaClubs():Observable<Club> {
    return this.http.get<Club>(this.TransfermarktAPI +'/competitions/L1/clubs');
  }
  getSeriaAClubs():Observable<Club> {
    return this.http.get<Club>(this.TransfermarktAPI +'/competitions/IT1/clubs');
  }
  getLigue1Clubs():Observable<Club> {
    return this.http.get<Club>(this.TransfermarktAPI +'/competitions/FR1/clubs');
  }
  getMLSClubs():Observable<Club> {
    return this.http.get<Club>(this.TransfermarktAPI +'/competitions/MLS1/clubs');
  }
  getSPLClubs():Observable<Club> {
    return this.http.get<Club>(this.TransfermarktAPI +'/competitions/SA1/clubs');
  }

  getClubDetails(clubId: string): Observable<Club> {
    const url = `${this.TransfermarktAPI}/clubs/${clubId}/profile`;
    return this.http.get<Club>(url);
  }

  getAllPlayersOfClub(clubId: string): Observable<Player[]> {
    const url = `${this.TransfermarktAPI}/clubs/${clubId}/players`;
    return this.http.get<Player[]>(url);
  }
}
