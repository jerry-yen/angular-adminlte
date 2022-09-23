import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutContentComponent } from './layouts/layout-content/layout-content.component';
import { StickyComponent } from './components/sticky/sticky.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutContentComponent,
  },
  {
    path: "home",
    component: LayoutContentComponent,
    children:[
      {
        path: "",
        component: StickyComponent,
        outlet: 'level_2'
      },
      {
        path: "stick1",
        component: StickyComponent,
        outlet: 'level_2'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
