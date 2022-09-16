import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDropdownUserinfoComponent } from './menu-dropdown-userinfo.component';

describe('MenuDropdownUserinfoComponent', () => {
  let component: MenuDropdownUserinfoComponent;
  let fixture: ComponentFixture<MenuDropdownUserinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDropdownUserinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuDropdownUserinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
