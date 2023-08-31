import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { PromiseComponent } from './pages/promise/promise.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: AdminLayoutComponent,
    children:[
      {path: '', component: DashboardComponent, data: {titulo: 'Dashboard'} },
      {path: 'progress', component: ProgressComponent, data: {titulo: 'ProgressBar'} },
      {path: 'grafica1', component: Grafica1Component, data: {titulo: 'Grafica1'} },
      {path: 'account-setting', component: AccountSettingsComponent, data: {titulo: 'Account-setting'} },
      {path: 'promesa', component: PromiseComponent, data: {titulo: 'Promesas'} },
      {path: 'rxjs', component: RxjsComponent, data: {titulo: 'Rxjs'} },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
