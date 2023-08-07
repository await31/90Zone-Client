import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DashboardService } from 'src/app/services/dashboard.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    
  constructor(private auth:AuthService, private api:DashboardService, private userStore: UserStoreService) {}


  public username: string = ""
  public role!: string;

  public users:any = [];

  ngOnInit(): void {
    this.api.getAllUsers().subscribe(res=>{
      this.users = res;
      console.log(res);
    });

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
