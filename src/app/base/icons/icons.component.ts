import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-icons",
  template: ` <div class="container is-fullhd">
    <section class="hero is-primary">
      <div class="hero-body">
        <p class="title">Base</p>
        <p class="subtitle">icons works!</p>
      </div>
    </section>
  </div>`,
  styles: []
})
export class IconsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
