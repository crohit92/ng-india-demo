import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HighlightDirective } from "../highlight/highlight.directive";

@Component({
  selector: "app-faqs",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./faqs.component.html",
  styleUrls: ["./faqs.component.scss"],
  hostDirectives: [HighlightDirective],
})
export class FaqsComponent {}
