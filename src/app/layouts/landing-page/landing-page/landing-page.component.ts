import { Component } from '@angular/core';
import { Animation } from './../../../../animations/animation';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [Animation.SMOOTH_CONTAINER],
})
export class LandingPageComponent {
  public typeSubHeading = false;
}
