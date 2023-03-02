import { CommonModule, NgSwitch, NgSwitchCase } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, RouterOutlet],
  providers: [],
})
export class AppComponent {
  title = "standalone";
}
