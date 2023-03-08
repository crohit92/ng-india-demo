import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { appNameToken } from "projects/module-based/src/app/app-name.token";
import { AppComponent } from "./app/app.component";
import { FaqsComponent } from "./app/faqs/faqs.component";
bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: appNameToken,
      useValue: "Environment",
    },
    provideRouter([
      {
        path: "",
        loadChildren: () => import("./app/dashboard/dashboard.routes"),
      },
      {
        path: "public",
        providers: [
          {
            provide: appNameToken,
            useValue: "Public",
          },
        ],
        children: [
          {
            path: "about-us",
            loadComponent: () =>
              import("./app/about-us/about-us.component").then(
                (res) => res.AboutUsComponent
              ),
          },
        ],
      },
    ]),
  ],
});
