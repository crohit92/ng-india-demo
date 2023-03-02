import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { FaqsComponent } from "./app/faqs/faqs.component";

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      {
        path: "",
        loadChildren: () =>
          import("./app/dashboard/dashboard.module").then(
            (res) => res.DashboardModule
          ),
      },
      {
        path: "about-us",
        loadComponent: () =>
          import("./app/about-us/about-us.component").then(
            (res) => res.AboutUsComponent
          ),
      },
      {
        path: "faqs",
        component: FaqsComponent,
      },
    ]),
  ],
});
