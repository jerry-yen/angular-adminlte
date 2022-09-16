import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  // 屬性
  @Input() menu_item!: menu_item_interface;

  constructor() { }

  ngOnInit(): void {
  }

}

/**
 * 選單項目介面
 */
export interface menu_item_interface {
  // 標題
  title: string;

  // 圖示
  icon?: string;

  // 子選單
  sub_menu_items?: menu_item_interface[];

  // 連結路徑
  path?: string;

  // 標籤(未讀、重要性等標註)
  tag?: string;
}