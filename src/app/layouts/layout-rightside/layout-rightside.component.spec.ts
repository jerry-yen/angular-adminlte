import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutRightsideComponent } from './layout-rightside.component';

describe('LayoutRightsideComponent', () => {
  let component: LayoutRightsideComponent;
  let fixture: ComponentFixture<LayoutRightsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutRightsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutRightsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
