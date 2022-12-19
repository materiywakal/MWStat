import { Routes } from "@angular/router";

import { StatisticComponent } from "src/app/pages/statistic/statistic.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { LoginComponent } from "src/app/pages/login/login.component";

export const AdminLayoutRoutes: Routes = [
  { path: "statistic", component: StatisticComponent },
  { path: "icons", component: IconsComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  { path: "login", component: LoginComponent }
];
