import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FooterNavIconComponent } from './footer-nav-icon.component';

describe('FooterNavIconComponent', () => {
  let component: FooterNavIconComponent;
  let fixture: ComponentFixture<FooterNavIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterNavIconComponent],
      imports: [BrowserAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterNavIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
