import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

//Services
import { IdentityGuard } from './services/identity.guard';

//Componets
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { LoginComponent } from './views/login/login.component';
import { LayoutComponent } from './containers/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule, 
    ReactiveFormsModule,
    IonicModule.forRoot(), 
    AppRoutingModule
  ],
  providers: [IdentityGuard, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}