import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly APIUrl = "https://localhost:7109/api/Setup";

  constructor(private http: HttpClient, private router: Router) { }

  getAllUsers() {
    return this.http.get<any>(this.APIUrl +'/GetAllUsers');
  }
}
