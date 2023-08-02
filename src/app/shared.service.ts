import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "https://localhost:7109/api";

  constructor(private http: HttpClient) { }

  getAllLeagues(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/League');
  }

  createLeague(name: string, countryId: number): Observable<string> {
    const data = {
      name: name
    };

    return this.http.post<string>(this.APIUrl + '/League?countryId=' + countryId, data);
  }

  getAllCountries(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/Country');
  }
}
