import { Component, Inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { appNameToken } from "projects/module-based/src/app/app-name.token";

@Component({
  selector: "app-about-us",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.scss"],
})
export class AboutUsComponent {
  constructor(@Inject(appNameToken) public name: string) {}
}
