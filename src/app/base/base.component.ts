import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-base",
  template: `<div class="container">
    <router-outlet></router-outlet>
  </div>`,
  styles: []
})
export class BaseComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
