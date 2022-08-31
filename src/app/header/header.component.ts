import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-header",
  template: `<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <!--a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
      </a-->

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" routerLink="/">Home</a>
        <a class="navbar-item" routerLink="/base">Base</a>
        <a class="navbar-item" routerLink="/layouts">Layouts</a>
        <a class="navbar-item" routerLink="/modules">Modules</a>
        <a class="navbar-item" routerLink="/themes">Themes</a>
        <a class="navbar-item" routerLink="states">States</a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item"></div>
      </div>
    </div>
  </nav>`,
  styles: []
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
