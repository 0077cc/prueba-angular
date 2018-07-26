import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ServiciosListComponent } from './servicios/servicios-list/servicios-list.component';
import { ServiciosEditComponent } from './servicios/servicios-edit/servicios-edit.component';

import { HttpClientModule } from '@angular/common/http';
import { ServiciosItemComponent } from './servicios/servicios-list/servicios-item/servicios-item.component';

import { ServiciosService } from './servicios/servicios.service';

@NgModule({
  declarations: [
    AppComponent,
    ServiciosComponent,
    ServiciosListComponent,
    ServiciosEditComponent,
    ServiciosItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ServiciosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
