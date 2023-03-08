import { Component, Inject } from "@angular/core";
import { appNameToken } from "projects/module-based/src/app/app-name.token";
import { HighlightDirective } from "../../highlight/highlight.directive";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  standalone: true,
  hostDirectives: [HighlightDirective],
})
export class HomeComponent {
  constructor(@Inject(appNameToken) public name: string) {}
}
