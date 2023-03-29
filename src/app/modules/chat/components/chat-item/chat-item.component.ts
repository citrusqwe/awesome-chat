import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.less']
})
export class ChatItemComponent implements OnInit {
  @Input() active: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
