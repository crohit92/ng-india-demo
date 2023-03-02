import { Component, Inject } from "@angular/core";
import { appNameToken } from "../../app-name.token";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  constructor(@Inject(appNameToken) public readonly name: string) {}
}
