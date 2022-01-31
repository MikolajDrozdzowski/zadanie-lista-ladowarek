import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng-lts/inputtext';
import { InputNumberModule } from 'primeng-lts/inputnumber';
import { ButtonModule } from 'primeng-lts/button';
import { FormsModule } from '@angular/forms';
import { FieldsetModule } from 'primeng-lts/fieldset';
import { CardModule } from 'primeng-lts/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng-lts/accordion';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddChargerComponent } from './components/add-charger/add-charger.component';
import { ChargersComponent } from './components/chargers/chargers.component';
import { ChargerComponent } from './components/charger/charger.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddChargerComponent,
    ChargersComponent,
    ChargerComponent,
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    FieldsetModule,
    CardModule,
    BrowserAnimationsModule,
    AccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
