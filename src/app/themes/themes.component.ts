import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-themes",
  template: `
    <div class="container is-fullhd">
      <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">Themes</p>
          <p class="subtitle">Primary subtitle</p>
        </div>
      </section>
    </div>
  `,
  styles: []
})
export class ThemesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
