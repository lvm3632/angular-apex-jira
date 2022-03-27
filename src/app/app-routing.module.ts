import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/components/dashboard/dashboard.component';
import { HomeComponent } from './components/components/home/home.component';
import { IssuesTableComponent } from './components/components/issues-table/issues-table.component';
import { DashboardComponentShared } from './shared/layout/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'issues',
    component: IssuesTableComponent,
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/authorization/authorization.module').then(
        (m) => m.AuthorizationModule
      ),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
