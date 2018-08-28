import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

import { HttpStatusService } from 'src/app/core/http/http-status.service';
import { httpInterceptorProviders } from 'src/app/core/http';

@NgModule({
  imports: [
  CommonModule,
    RouterModule
  ],
  declarations: [NavbarComponent],
  providers: [httpInterceptorProviders, HttpStatusService],
  exports: [NavbarComponent]
})
export class CoreModule { }
