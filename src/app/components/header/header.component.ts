import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DashboardService } from 'src/app/services/dashboard.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {

  constructor(private auth:AuthService, private api:DashboardService, private userStore: UserStoreService) {}

  public username: string = ""
  public role!: string;

  ngOnInit(): void {

    this.userStore.getUsernameFromStore()
    .subscribe(val=>{
      let usernameFromToken = this.auth.getUsernameFromToken();
      this.username= val || usernameFromToken
    })

    this.userStore.getRoleFromStore()
    .subscribe(val=> {
      const roleFromToken= this.auth.getRoleFromToken();
      this.role = val || roleFromToken;
    })
  }

  logOut(){
    this.auth.logOut();
  }
}
