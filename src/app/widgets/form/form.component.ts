import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  // 標題名稱
  title?: string = '未命名'

  // 欄位元件
  components? : Component

  // 按鈕元件
  buttons? : Component

  constructor() { }

  ngOnInit(): void {
  }

}
