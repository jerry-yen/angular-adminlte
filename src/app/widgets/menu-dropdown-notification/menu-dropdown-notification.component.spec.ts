import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDropdownNotificationComponent } from './menu-dropdown-notification.component';

describe('MenuDropdownNotificationComponent', () => {
  let component: MenuDropdownNotificationComponent;
  let fixture: ComponentFixture<MenuDropdownNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDropdownNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuDropdownNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
