import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-states",
  template: `
    <div class="container is-fullhd">
      <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">States</p>
          <p class="subtitle">Primary subtitle</p>
        </div>
      </section>
    </div>
  `,
  styles: []
})
export class StatesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
