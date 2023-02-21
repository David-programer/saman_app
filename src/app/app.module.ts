import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

//Services
import { IdentityGuard } from './services/identity.guard';

//Componets
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { LoadingComponent } from './components/loading/loading.component';
import { LoginComponent } from './views/login/login.component';
import { LayoutComponent } from './containers/layout/layout.component';
import { MonitoreoChanceComponent } from './views/monitoreo-chance/monitoreo-chance.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    LoadingComponent,
    MonitoreoChanceComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    IonicModule.forRoot(), 
    AppRoutingModule
  ],
  providers: [HTTP, IdentityGuard, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}