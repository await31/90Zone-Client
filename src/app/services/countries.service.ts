import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../models/country.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  readonly APIUrl = "https://localhost:7109/api";

  constructor(private http: HttpClient) { }
  
  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.APIUrl + '/Country');
  }
}
