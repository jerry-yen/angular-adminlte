import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './widgets/header-menu/header-menu.component';
import { LayoutHeaderComponent } from './layouts/layout-header/layout-header.component';
import { LayoutFooterComponent } from './layouts/layout-footer/layout-footer.component';
import { LayoutLeftsideComponent } from './layouts/layout-leftside/layout-leftside.component';
import { LayoutRightsideComponent } from './layouts/layout-rightside/layout-rightside.component';
import { LayoutContentComponent } from './layouts/layout-content/layout-content.component';
import { MenuDropdownNotificationComponent } from './widgets/menu-dropdown-notification/menu-dropdown-notification.component';
import { MenuDropdownUserinfoComponent } from './widgets/menu-dropdown-userinfo/menu-dropdown-userinfo.component';
import { SideMenuComponent } from './widgets/side-menu/side-menu.component';
import { LayoutPreloaderComponent } from './layouts/layout-preloader/layout-preloader.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { StickyComponent } from './components/sticky/sticky.component';
import { FormComponent } from './widgets/form/form.component';
import { DataComponent } from './widgets/data/data.component';
import { TextComponent } from './components/text/text.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    LayoutLeftsideComponent,
    LayoutRightsideComponent,
    LayoutContentComponent,
    MenuDropdownNotificationComponent,
    MenuDropdownUserinfoComponent,
    SideMenuComponent,
    LayoutPreloaderComponent,
    MenuItemComponent,
    StickyComponent,
    FormComponent,
    DataComponent,
    TextComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
