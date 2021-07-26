import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'Auth',
    loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'Dashboard',
    loadChildren:() => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: '**',
    redirectTo: '/Auth',
  },
  {
    path:'Products',
    loadChildren:() => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
