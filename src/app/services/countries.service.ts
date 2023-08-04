import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country, CountryCreated } from '../models/country.model';
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

  addCountry(addCountryRequest: CountryCreated): Observable<CountryCreated> {
    return this.http.post<CountryCreated>(this.APIUrl + '/Country', 
    addCountryRequest);
  }

  getCountry(Id: string): Observable<Country> {
    return this.http.get<Country>(this.APIUrl + '/Country/' +Id);
  }

  editCountry(Id: string, editCountryRequest: Country): Observable<Country> {
    return this.http.put<Country>(this.APIUrl + '/Country/' +Id, editCountryRequest);
  }

  deleteCountry(Id: string): Observable<Country> {
    return this.http.delete<Country>(this.APIUrl + '/Country/' + Id);
  }

}
