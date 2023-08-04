import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { League, LeagueCreated } from '../models/league.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  readonly APIUrl = "https://localhost:7109/api";

  constructor(private http: HttpClient) { }
  
  getAllLeagues(): Observable<League[]> {
    return this.http.get<League[]>(this.APIUrl + '/League');
  }

  addLeague(addLeagueRequest: LeagueCreated, countryId: number): Observable<LeagueCreated> {
    return this.http.post<LeagueCreated>(this.APIUrl + '/League', addLeagueRequest, { params: { countryId } });
  }

  getLeague(Id: string): Observable<League> {
    return this.http.get<League>(this.APIUrl + '/League/' +Id);
  }

  editLeague(Id: string, editLeagueRequest: League, countryId: number): Observable<League> {
    return this.http.put<League>(this.APIUrl + '/League/' +Id, editLeagueRequest, { params: { countryId } });
  }

  deleteLeague(Id: string): Observable<League> {
    return this.http.delete<League>(this.APIUrl + '/League/' + Id);
  }

}
