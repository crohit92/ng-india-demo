import { Component, Inject } from "@angular/core";
import { appNameToken } from "projects/module-based/src/app/app-name.token";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  standalone: true,
})
export class HomeComponent {
  constructor(@Inject(appNameToken) public name: string) {}
}