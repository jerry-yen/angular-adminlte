import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutLeftsideComponent } from './layout-leftside.component';

describe('LayoutLeftsideComponent', () => {
  let component: LayoutLeftsideComponent;
  let fixture: ComponentFixture<LayoutLeftsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutLeftsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutLeftsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
