import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CdkTableModule } from "@angular/cdk/table";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import localeRuExtra from '@angular/common/locales/extra/ru';
registerLocaleData(localeRu, 'ru-RU', localeRuExtra);

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    MatTableModule,
    MatPaginatorModule,
    CdkTableModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  declarations: [AppComponent, AdminLayoutComponent],
  providers: [
    {provide: LOCALE_ID, useValue: 'ru-RU'},
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
