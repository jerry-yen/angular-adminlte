import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  // 標題名稱
  title?: string = '未命名'

  // 欄位元件
  components: ComponentMetadata[] = [];

  // 按鈕元件
  buttons: Component[] = [];

  constructor(private http: HttpClient) {


  }

  ngOnInit(): void {
    this.http.get<FormMetadata>('http://microlink.chihsin.com/api/admin/form').subscribe(data => {
      if (data.status == 'success') {
        for (let key in data.metadata.fields) {
          console.log(data.metadata.fields[key].type);
          this.components.push(data.metadata.fields[key]);
        }
      }
      console.log(this.components);
    });
  }

}

export interface FormMetadata {
  metadata: any;
  status: string;
}

export interface ComponentMetadata {
  type: string;
  name: string;
  label: string;
  placeholder: string;

}