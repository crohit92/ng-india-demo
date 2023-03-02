import { Component, Inject } from "@angular/core";
import { appNameToken } from "../app-name.token";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
  title = this.name;
  constructor(@Inject(appNameToken) private readonly name: string) {}
}
