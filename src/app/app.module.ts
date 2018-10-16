import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import { TripDetailsModule } from './trip-details/trip-details.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { TripFormComponent } from 'src/app/trip-details/trip-form/trip-form.component';
import { SummaryPageComponent } from './summary-page/summary-page.component';

const routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'summary', component: SummaryPageComponent },
  {
    path: 'trip/:id',
    component: TripDetailsComponent,
    children: [
      {
        path: 'trip-form',
        component: TripFormComponent
      }
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [AppComponent, SummaryPageComponent],
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule.forRoot(routes),
    SharedModule,
    DashboardModule,
    HomeModule,
    TripDetailsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
