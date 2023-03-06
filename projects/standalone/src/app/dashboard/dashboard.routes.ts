import { Routes } from "@angular/router";

export default [
  {
    path: "",
    loadComponent: () =>
      import("./dashboard.component").then((res) => res.DashboardComponent),
    children: [
      {
        path: "home",
        loadChildren: () => import("./home/home.route"),
      },
    ],
  },
] as Routes;
