import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { League } from '../models/league.model';
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

  createLeague(name: string, countryId: number): Observable<string> {
    const data = {
      name: name
    };
    return this.http.post<string>(this.APIUrl + '/League?countryId=' + countryId, data);
  }

}
