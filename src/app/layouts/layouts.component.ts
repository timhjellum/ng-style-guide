import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-layouts",
  template: `
    <div class="container is-fullhd">
      <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">Primary hero</p>
          <p class="subtitle">Primary subtitle</p>
        </div>
      </section>
    </div>
  `,
  styles: []
})
export class LayoutsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
