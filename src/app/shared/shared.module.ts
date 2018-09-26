import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicateComponent } from 'src/app/shared/communicate/communicate.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CommunicateComponent, LoaderComponent],
  exports: [CommunicateComponent, LoaderComponent]
})
export class SharedModule {}
