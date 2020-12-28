import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ResponsiveToolbarComponent } from './responsive-toolbar/responsive-toolbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { ListaNozzeComponent } from './lista-nozze/lista-nozze.component';
import { GrazieComponent } from './grazie/grazie.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule} from '@angular/common/http';
import {GoogleMapsModule} from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    ResponsiveToolbarComponent,
    HomeComponent,
    InfoComponent,
    ListaNozzeComponent,
    GrazieComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
