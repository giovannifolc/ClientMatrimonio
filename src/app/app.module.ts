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
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ProdottiComponent } from './lista-nozze/prodotti/prodotti.component';
import { ViaggioComponent } from './lista-nozze/viaggio/viaggio.component';
import { PartecipantiComponent } from './partecipanti/partecipanti.component';
import { PartecipantiContComponent } from './partecipanti/partecipanti-cont/partecipanti-cont.component';

@NgModule({
  declarations: [
    AppComponent,
    ResponsiveToolbarComponent,
    HomeComponent,
    InfoComponent,
    ListaNozzeComponent,
    GrazieComponent,
    ProdottiComponent,
    ViaggioComponent,
    PartecipantiComponent,
    PartecipantiContComponent
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
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
