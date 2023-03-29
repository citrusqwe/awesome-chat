import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from "../../components/menu/menu.component";
import {LayoutComponent} from "../../components/layout/layout.component";
import {TuiAvatarModule} from "@taiga-ui/kit";
import {TuiExpandModule, TuiSvgModule} from "@taiga-ui/core";
import {ChatModule} from "../chat/chat.module";

@NgModule({
  declarations: [
    MenuComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ChatModule,

    // Tui
    TuiAvatarModule,
    TuiSvgModule,
    TuiExpandModule
  ],
  exports: [
    MenuComponent,
    LayoutComponent,
    ChatModule
  ]
})
export class SharedModule {
}
