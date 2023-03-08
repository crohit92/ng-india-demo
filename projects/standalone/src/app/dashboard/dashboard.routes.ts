import { Routes } from "@angular/router";
import { FaqsComponent } from "../faqs/faqs.component";
import { DashboardComponent } from "./dashboard.component";

export default [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "home",
        loadComponent: () =>
          import("./home/home.component").then((res) => res.HomeComponent),
      },
      {
        path: "faqs",
        component: FaqsComponent,
      },
    ],
  },
] as Routes;
