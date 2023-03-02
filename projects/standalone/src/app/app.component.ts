import { CommonModule, NgSwitch, NgSwitchCase } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  providers: [],
})
export class AppComponent {
  title = "standalone";
}
