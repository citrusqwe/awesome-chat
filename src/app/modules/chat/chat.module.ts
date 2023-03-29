import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChatComponent} from './components/chat/chat.component';
import {ChatListComponent} from "./components/chat-list/chat-list.component";
import {ChatItemComponent} from "./components/chat-item/chat-item.component";
import {ChatBoxComponent} from "./components/chat-box/chat-box.component";
import {TuiAvatarModule, TuiBadgeModule, TuiInputModule} from "@taiga-ui/kit";
import {TuiSvgModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ChatComponent,
    ChatListComponent,
    ChatItemComponent,
    ChatBoxComponent
  ],
  imports: [
    CommonModule,
    TuiAvatarModule,
    TuiInputModule,
    TuiSvgModule,
    FormsModule,
    TuiTextfieldControllerModule,
    TuiBadgeModule
  ],
  exports: [
    ChatComponent,
    ChatListComponent,
    ChatItemComponent,
    ChatBoxComponent
  ]
})
export class ChatModule {
}
