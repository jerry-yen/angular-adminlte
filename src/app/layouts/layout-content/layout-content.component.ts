import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-content',
  templateUrl: './layout-content.component.html',
  styleUrls: ['./layout-content.component.scss']
})
export class LayoutContentComponent implements OnInit {

  // 頁面標題
  title?: string = '未命名'

  constructor() { }

  ngOnInit(): void {
  }

}
