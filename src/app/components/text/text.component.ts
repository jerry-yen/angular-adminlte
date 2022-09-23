import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  // 元件名稱
  @Input() name?: string;

  // 提示文字
  @Input() placeholder?: string;

  // CSS類別
  @Input() classes ?:string;

  constructor() { }

  ngOnInit(): void {
  }

}
