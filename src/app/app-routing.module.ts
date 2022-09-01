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
import { Accessibility } from "./base/accessibility.component"
import { ColorPalette } from "./base/color-palette.component"
import { Document } from "./base/document.component"
import { Footer } from "./base/footer.component"
import { Navigation } from "./base/navigation.component"
import { Forms } from "./base/forms.component"
import { Icons } from "./base/icons.component"
import { Logos } from "./base/logos.component"
import { SizeConversions } from "./base/size-conversions.component"
import { LayoutsHome } from "./layouts/layouts-home.component"
import { FullPage } from "./layouts/fullpage.component"
import { NestedFiveCol } from "./layouts/nested-five-col.component"
import { NestedFourCol } from "./layouts/nested-four-col.component"
import { NestedRows } from "./layouts/nested-rows.component"
import { NestedSixCol } from "./layouts/nested-six-col.component"
import { NestedThreeCol } from "./layouts/nested-three-col.component"
import { NestedTwoCol } from "./layouts/nested-two-col.component"
import { Rows } from "./layouts/rows.component"
import { ModulesHome } from "./modules/modules-home.component"
import { Accordions } from "./modules/accordions.component"
import { Blockquote } from "./modules/blockquote.component"
import { Code } from "./modules/code.component"
import { Contact } from "./modules/contact.component"
import { CorrectionUpdate } from "./modules/correction-update.component"
import { EnergyEducation } from "./modules/energy-education.component"
import { Fancybox } from "./modules/fancyapps.component"
import { Modals } from "./modules/modals.component"
import { EnlargeContent } from "./modules/enlarge-content.component"
import { iFrame } from "./modules/iframe.component"
import { Images } from "./modules/images.component"
import { Nenu } from "./modules/menu.component"
import { Carousels } from "./modules/carousels.component"
import { Homepage } from "./modules/homepage.component"
import { Multi } from "./modules/multi.component"
import { Outlooks } from "./modules/outlooks.component"
import { Footnotes } from "./modules/footnotes.component"
import { Forms } from "./modules/forms.component"
import { Messaging } from "./modules/messaging.component"
import { MessagingWide } from "./modules/messaging-wide.component"
import { PageTitles } from "./modules/page-titles.component"
import { UnorderedLists } from "./modules/unordered-lists.component"
import { ReportHeaders } from "./modules/report-headers.component"
import { RevisionNotice } from "./modules/revision-notice.component"
import { Tables } from "./modules/tables.component"
import { Tabs } from "./modules/tabs.component"
import { Visualizations } from "./modules/visualizations.component"
import { StatesHome } from "./states/states-home.component"
import { BuildAnchor } from "./states/build-anchor.component"
import { CalculatedNumberedLists } from "./states/calculated-numbered-lists.component"
import { EmptyListItems } from "./states/empty-list-items.component"
import { HeaderShrinkExpand } from "./states/header-shrink-expand.component"
import { StickyTableHeaders } from "./states/sticky-table-headers.component"
import { ToggleLayers } from "./states/toggle-layers.component"
import { Videos } from "./states/videos.component"
import { ThemesHome } from "./themes/themes-home.component"
import { FAQOne } from "./themes/faq-one.component"
import { FAQTwo } from "./themes/faq-two.component"
import { StarterTemplate } from "./themes/starter-template.component"
import { BaseHome } from "./base . base-home.component"

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
  path: "accessibility",
  component: AccessibilityComponent,
  },
  {
  path: "color-palette",
  component: ColorPaletteComponent,
  },
  {
  path: "document",
  component: DocumentComponent,
  },
  {
  path: "footer",
  component: FooterComponent,
  },
  {
  path: "navigation",
  component: NavigationComponent,
  },
  {
  path: "forms",
  component: FormsComponent,
  },
  {
  path: "icons",
  component: IconsComponent,
  },
  {
  path: "logos",
  component: LogosComponent,
  },
  {
  path: "size-conversions",
  component: SizeConversionsComponent,
  },
  {
  path: "layouts-home",
  component: LayoutsHomeComponent,
  },
  {
  path: "fullpage",
  component: FullPageComponent,
  },
  {
  path: "nested-five-col",
  component: NestedFiveColComponent,
  },
  {
  path: "nested-four-col",
  component: NestedFourColComponent,
  },
  {
  path: "nested-rows",
  component: NestedRowsComponent,
  },
  {
  path: "nested-six-col",
  component: NestedSixColComponent,
  },
  {
  path: "nested-three-col",
  component: NestedThreeColComponent,
  },
  {
  path: "nested-two-col",
  component: NestedTwoColComponent,
  },
  {
  path: "rows",
  component: RowsComponent,
  },
  {
  path: "modules-home",
  component: ModulesHomeComponent,
  },
  {
  path: "accordions",
  component: AccordionsComponent,
  },
  {
  path: "blockquote",
  component: BlockquoteComponent,
  },
  {
  path: "code",
  component: CodeComponent,
  },
  {
  path: "contact",
  component: ContactComponent,
  },
  {
  path: "correction-update",
  component: CorrectionUpdateComponent,
  },
  {
  path: "energy-education",
  component: EnergyEducationComponent,
  },
  {
  path: "fancyapps",
  component: FancyboxComponent,
  },
  {
  path: "modals",
  component: ModalsComponent,
  },
  {
  path: "enlarge-content",
  component: EnlargeContentComponent,
  },
  {
  path: "iframe",
  component: iFrameComponent,
  },
  {
  path: "images",
  component: ImagesComponent,
  },
  {
  path: "menu",
  component: NenuComponent,
  },
  {
  path: "carousels",
  component: CarouselsComponent,
  },
  {
  path: "homepage",
  component: HomepageComponent,
  },
  {
  path: "multi",
  component: MultiComponent,
  },
  {
  path: "outlooks",
  component: OutlooksComponent,
  },
  {
  path: "footnotes",
  component: FootnotesComponent,
  },
  {
  path: "forms",
  component: FormsComponent,
  },
  {
  path: "messaging",
  component: MessagingComponent,
  },
  {
  path: "messaging-wide",
  component: MessagingWideComponent,
  },
  {
  path: "page-titles",
  component: PageTitlesComponent,
  },
  {
  path: "unordered-lists",
  component: UnorderedListsComponent,
  },
  {
  path: "report-headers",
  component: ReportHeadersComponent,
  },
  {
  path: "revision-notice",
  component: RevisionNoticeComponent,
  },
  {
  path: "tables",
  component: TablesComponent,
  },
  {
  path: "tabs",
  component: TabsComponent,
  },
  {
  path: "visualizations",
  component: VisualizationsComponent,
  },
  {
  path: "states-home",
  component: StatesHomeComponent,
  },
  {
  path: "build-anchor",
  component: BuildAnchorComponent,
  },
  {
  path: "calculated-numbered-lists",
  component: CalculatedNumberedListsComponent,
  },
  {
  path: "empty-list-items",
  component: EmptyListItemsComponent,
  },
  {
  path: "header-shrink-expand",
  component: HeaderShrinkExpandComponent,
  },
  {
  path: "sticky-table-headers",
  component: StickyTableHeadersComponent,
  },
  {
  path: "toggle-layers",
  component: ToggleLayersComponent,
  },
  {
  path: "videos",
  component: VideosComponent,
  },
  {
  path: "themes-home",
  component: ThemesHomeComponent,
  },
  {
  path: "faq-one",
  component: FAQOneComponent,
  },
  {
  path: "faq-two",
  component: FAQTwoComponent,
  },
  {
  path: "starter-template",
  component: StarterTemplateComponent,
  },
  {
  path: "base-home",
  component: BaseHomeComponent,
  },
       
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

