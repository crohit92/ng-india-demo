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
  user: SettableSignal<string>;

  constructor() {
    this.counter = signal(0);
    this.user = signal("Rohit");

    // This effect does not fire on change to the signal inside it.
    effect(() => {
      Promise.resolve().then(() => {
        console.log("Count changed", this.counter());
      });
    });
    effect(() => {
      console.log("Name changed", this.user());
    });

    setInterval(() => {
      this.counter.set(this.counter() + 1);
    }, 1000);
    setInterval(() => {
      this.user.set("Rohit" + this.counter());
    }, 1000);
  }
}
