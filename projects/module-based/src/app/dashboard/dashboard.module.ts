import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { RouterModule } from "@angular/router";
import { appNameToken } from "../app-name.token";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [DashboardComponent, HomeComponent],
  providers: [
    {
      provide: appNameToken,
      useValue: "Updated Name",
    },
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: DashboardComponent,
      },
    ]),
  ],
})
export class DashboardModule {}
