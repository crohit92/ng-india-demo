import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { HighlightService } from "../highlight/highlight.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  providers: [],
  standalone: true,
  imports: [RouterOutlet, RouterLink],
})
export class DashboardComponent {
  constructor(private readonly highlighter: HighlightService) {}
  searchTermChange(term: string) {
    this.highlighter.searchFor(term);
  }
}
