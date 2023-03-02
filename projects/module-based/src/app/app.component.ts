import { Component, Inject } from "@angular/core";
import { appNameToken } from "./app-name.token";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(@Inject(appNameToken) private readonly name: string) {}
  title = this.name;
}
