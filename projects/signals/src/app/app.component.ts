import { Component } from "@angular/core";
import { SettableSignal, signal } from "../signals";
import { effect } from "../signals/effect";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "signals";

  counter: SettableSignal<number>;

  constructor() {
    this.counter = signal(0);
    effect(() => {
      console.log("Count changed", this.counter());
    });

    setInterval(() => {
      this.counter.set(this.counter() + 1);
    }, 1000);
  }
}
