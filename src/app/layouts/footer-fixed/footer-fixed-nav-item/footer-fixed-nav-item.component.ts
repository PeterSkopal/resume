import { Component, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

const styleNormal = {
  color: 'transparent',
  'text-shadow': '0 0 3px rgba(0,0,0,0.5)',
};
const styleHover = {
  color: 'black',
  'text-shadow': '0 0 0',
  'font-size': '16px',
};

@Component({
  selector: 'footer-fixed-nav-item',
  templateUrl: './footer-fixed-nav-item.component.html',
  styleUrls: ['./footer-fixed-nav-item.component.scss'],
  animations: [
    trigger('hover', [
      state('true', style(styleHover)),
      transition('false => true', animate('100ms ease-in')),
      state('false', style(styleNormal)),
      transition('true => false', animate('300ms ease-out')),
    ]),
  ],
})
export class FooterFixedNavItemComponent {
  public hoverState = false;

  @HostListener('mouseover')
  _mouseover() {
    this.hoverState = true;
  }
  @HostListener('mouseout')
  _mouseout() {
    this.hoverState = false;
  }
}
