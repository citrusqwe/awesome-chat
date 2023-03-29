import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.less']
})
export class ChatListComponent implements OnInit {
  search: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
