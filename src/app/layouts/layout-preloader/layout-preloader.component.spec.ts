import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPreloaderComponent } from './layout-preloader.component';

describe('LayoutPreloaderComponent', () => {
  let component: LayoutPreloaderComponent;
  let fixture: ComponentFixture<LayoutPreloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutPreloaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutPreloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
