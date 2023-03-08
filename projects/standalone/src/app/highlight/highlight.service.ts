import { Injectable } from "@angular/core";
import { signal } from "projects/signals/src/signals";

@Injectable({
  providedIn: "root",
})
export class HighlightService {
  searchTerm = signal<string | null>(null);
  constructor() {}

  clearSearch() {
    this.searchTerm.set(null);
  }

  searchFor(value: string) {
    this.searchTerm.set(value);
  }
}
