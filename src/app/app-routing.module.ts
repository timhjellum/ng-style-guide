import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { BaseComponent } from "./base/base.component"
//import { BaseHomeComponent } from "./base/Home/home.component"
import { IconsComponent } from "./base/icons/icons.component"
import { TypographyComponent } from "./base/typography/typography.component"
//import { color-paletteComponent } from "./base/color-palette/color-palette.component"

import { HomeComponent } from "./home/home.component"
import { LayoutsComponent } from "./layouts/layouts.component"
import { ModulesComponent } from "./modules/modules.component"
import { StatesComponent } from "./states/states.component"
import { ThemesComponent } from "./themes/themes.component"

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "layouts",
    component: LayoutsComponent
  },
  {
    path: "base",
    component: BaseComponent,
    children: [
      {
        path: "typography",
        component: TypographyComponent
      },
      {
        path: "icons",
        component: IconsComponent
      }
    ]
  },
  {
    path: "modules",
    component: ModulesComponent
  },
  {
    path: "themes",
    component: ThemesComponent
  },
  {
    path: "states",
    component: StatesComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
