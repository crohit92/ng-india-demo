import { Directive, ElementRef } from "@angular/core";
import { effect } from "projects/signals/src/signals/effect";
import { HighlightService } from "./highlight.service";

@Directive({
  selector: "[appHighlight]",
  standalone: true,
})
export class HighlightDirective {
  constructor(
    private readonly el: ElementRef,
    private readonly highlighter: HighlightService
  ) {
    effect(() => {
      const term = this.highlighter.searchTerm();
      if (term !== null) {
        const el = this.el.nativeElement as HTMLElement;
        // get any existing highlighted elements
        const html = el.querySelector("[highlighted]")?.outerHTML ?? "";
        const text = el.querySelector("[highlighted]")?.innerHTML ?? "";
        el.innerHTML = decodeURIComponent(
          el.innerHTML
            // remove highlight if any exists
            .replaceAll(html, text)
            // highlight terms matching the search
            .replaceAll(
              term,
              term
                ? `<span highlighted style="background:yellow">${term}</span>`
                : term
            )
        );
      }
    });
  }
}
