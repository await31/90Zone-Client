import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { TransferMarketComponent } from './components/transfer-market/transfer-market.component';
import { MatchComponent } from './components/match/match.component';
import { PremierLeagueComponent } from './components/leagues/premier-league/premier-league.component';
import { LaLigaComponent } from './components/leagues/la-liga/la-liga.component';
import { BundesligaComponent } from './components/leagues/bundesliga/bundesliga.component';
import { SeriaAComponent } from './components/leagues/seria-a/seria-a.component';
import { LigueOneComponent } from './components/leagues/ligue-one/ligue-one.component';
import { MlsComponent } from './components/leagues/mls/mls.component';
import { SplComponent } from './components/leagues/spl/spl.component';
import { ClubDetailsComponent } from './components/club-details/club-details.component';

const routes: Routes = [
{ path: '', redirectTo: '', pathMatch: 'full' },
{ path: '', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
{ path: 'sign-up', component: RegisterComponent },
{ path: 'transfer-market', component: TransferMarketComponent },
{ path: 'match', component: MatchComponent },
{ path: 'premier-league', component: PremierLeagueComponent },
{ path: 'la-liga', component: LaLigaComponent },
{ path: 'bundesliga', component: BundesligaComponent },
{ path: 'seria-a', component: SeriaAComponent },
{ path: 'ligue-one', component: LigueOneComponent },
{ path: 'mls', component: MlsComponent },
{ path: 'spl', component: SplComponent },
{path: 'club/details/:id',component:ClubDetailsComponent},
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }