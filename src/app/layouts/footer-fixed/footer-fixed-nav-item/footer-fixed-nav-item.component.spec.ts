import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FooterFixedNavItemComponent } from './footer-fixed-nav-item.component';

describe('FooterFixedNavItemComponent', () => {
  let component: FooterFixedNavItemComponent;
  let fixture: ComponentFixture<FooterFixedNavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterFixedNavItemComponent],
      imports: [BrowserAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterFixedNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change state to hover', () => {
    component._mouseover();
    expect(component.hoverState).toBeTruthy();
  });

  it('should change state not hover', () => {
    component._mouseover();
    component._mouseout();
    expect(component.hoverState).toBeFalsy();
  });
});
