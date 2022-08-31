import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-modules",
  template: `
    <div class="container is-fullhd">
      <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">Modules</p>
          <p class="subtitle">Primary subtitle</p>
        </div>
      </section>
    </div>
  `,
  styles: []
})
export class ModulesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
