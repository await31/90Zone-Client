import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TransferMarketComponent } from './components/transfer-market/transfer-market.component';
import { MatchComponent } from './components/match/match.component';
import { PremierLeagueComponent } from './components/leagues/premier-league/premier-league.component';
import { LaLigaComponent } from './components/leagues/la-liga/la-liga.component';
import { BundesligaComponent } from './components/leagues/bundesliga/bundesliga.component';
import { SeriaAComponent } from './components/leagues/seria-a/seria-a.component';
import { LigueOneComponent } from './components/leagues/ligue-one/ligue-one.component';
import { MlsComponent } from './components/leagues/mls/mls.component';
import { SplComponent } from './components/leagues/spl/spl.component';
import { ListClubsComponent } from './components/list-clubs/list-clubs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AdminSidebarComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TransferMarketComponent,
    MatchComponent,
    PremierLeagueComponent,
    LaLigaComponent,
    BundesligaComponent,
    SeriaAComponent,
    LigueOneComponent,
    MlsComponent,
    SplComponent,
    ListClubsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
