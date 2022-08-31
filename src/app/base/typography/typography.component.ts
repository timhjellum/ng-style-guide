import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-typography",
  template: `<div class="container is-fullhd">
    <section class="hero is-primary">
      <div class="hero-body">
        <p class="title">Base</p>
        <p class="subtitle">typography works!</p>
      </div>
    </section>
  </div>`,
  styles: []
})
export class TypographyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
