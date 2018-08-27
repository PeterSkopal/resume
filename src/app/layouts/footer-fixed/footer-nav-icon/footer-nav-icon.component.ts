import { Component, HostListener, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Animation } from './../../../../animations/animation';

@Component({
  selector: 'footer-nav-icon',
  templateUrl: './footer-nav-icon.component.html',
  styleUrls: ['./footer-nav-icon.component.scss'],
  animations: [Animation.NAVIGATION_ICON],
})
export class FooterNavIconComponent implements OnInit {
  private hover: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public _hoverState;
  @HostListener('mouseenter', ['$event'])
  @HostListener('mouseleave', ['$event'])
  onHover(event: MouseEvent) {
    this.hover.next(!this.hover.value);
  }

  get hoverState() {
    return this._hoverState;
  }

  ngOnInit() {
    this.hover.asObservable().subscribe(val => {
      this._hoverState = val;
    });
  }
}
