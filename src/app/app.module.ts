import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { HeaderComponent } from "./header/header.component"
import { FooterComponent } from "./footer/footer.component"
import { HomeComponent } from "./home/home.component"
import { LayoutsComponent } from "./layouts/layouts.component"
import { ThemesComponent } from "./themes/themes.component"
import { ModulesComponent } from "./modules/modules.component"
import { BaseComponent } from "./base/base.component"
import { StatesComponent } from "./states/states.component"
import { IconsComponent } from "./base/icons/icons.component";
import { TypographyComponent } from './base/typography/typography.component'

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, LayoutsComponent, ThemesComponent, ModulesComponent, BaseComponent, StatesComponent, IconsComponent, TypographyComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
