import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CdkTableModule, CdkColumnDef, CdkCellDef, CdkRowDef, CdkHeaderRowDef } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { StatisticComponent } from "src/app/pages/statistic/statistic.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { LoginComponent } from "src/app/pages/login/login.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    CdkTableModule,
    NgbModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    StatisticComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    LoginComponent
  ],
  providers: [
    CdkColumnDef,
    CdkCellDef,
    CdkRowDef,
    CdkHeaderRowDef,
  ]
})
export class AdminLayoutModule {}
