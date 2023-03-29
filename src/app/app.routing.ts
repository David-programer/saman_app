import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

// Import Containers
import { LayoutComponent } from './containers/layout/layout.component';

// import { HomeComponent } from './views/home/home.component';
// import { P404Component } from './views/error/404.component';
// import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';

//Identity validation
import { IdentityGuard } from './services/identity.guard';
import { MonitoreoChanceComponent } from './views/monitoreo-chance/monitoreo-chance.component';
import { HomeComponent } from './views/home/home.component';
import { ErrorComponent } from './views/error/error.component';

// Components
// import { DashboardComponent } from './views/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data: { title: 'Login Page' } },
  // { path: '500', component: P500Component, data: { title: 'Page 500' } },
  // { path: 'login/:error', component: LoginComponent, data: { title: 'Login Page' } },
  // { path: 'logout/:sure', component: LoginComponent, data: { title: 'Logout Page' } },
  // { path: 'register', component: RegisterComponent, canActivate: [IdentityGuard], data: { title: 'Register Page' } },
  { path: '', component: LayoutComponent, canActivate: [IdentityGuard], data: { title: '' }, 
  children: [
    { path: 'monitoreo-linea', component: MonitoreoChanceComponent},
    { path: 'monitoreo-linea-raspa', component: MonitoreoChanceComponent },
    { path: 'monitoreo-linea-baloto', component: MonitoreoChanceComponent },
    { path: 'home', component: HomeComponent },
      // { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
  ]},
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}