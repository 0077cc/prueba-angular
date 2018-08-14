import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ServiciosListComponent } from './servicios/servicios-list/servicios-list.component';
import { ServiciosEditComponent } from './servicios/servicios-edit/servicios-edit.component';

import { HttpClientModule } from '@angular/common/http';
import { ServiciosItemComponent } from './servicios/servicios-list/servicios-item/servicios-item.component';

import { ServiciosService } from './servicios/servicios.service';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/services', pathMatch: 'full'  },
  { path: 'services', component: ServiciosComponent },
  { path: 'about', component: AboutComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ServiciosComponent,
    ServiciosListComponent,
    ServiciosEditComponent,
    ServiciosItemComponent,
    HeaderComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServiciosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
