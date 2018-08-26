import { Component, AfterViewInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { BehaviorSubject, Subject } from 'rxjs';

import { $Overlay } from './../../../../styles/variables';
const styleBegin = {
  'background-color': 'transparent',
};
const styleAfter = {
  'background-color': $Overlay,
};

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [
    trigger('appear', [
      transition('false => true', animate('500ms ease-in')),
      state('false', style(styleBegin)),
      state('true', style(styleAfter)),
    ]),
  ],
})
export class LandingPageComponent implements AfterViewInit {
  public typeSubHeading = false;
  public appear: Subject<boolean> = new BehaviorSubject(false);

  ngAfterViewInit() {
    this.appear.next(true);
  }
}
