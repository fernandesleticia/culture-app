import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventoDetailPage } from './evento-detail';

@NgModule({
  declarations: [
    EventoDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(EventoDetailPage),
  ],
})
export class EventoDetailPageModule {}
