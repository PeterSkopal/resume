import { Component } from '@angular/core';

@Component({
  selector: 'footer-fixed',
  templateUrl: './footer-fixed.component.html',
  styleUrls: ['./footer-fixed.component.scss'],
})
export class FooterFixedComponent {
  public items = [
    { name: 'who am I?', value: 'whoami' },
    { name: 'experience', value: 'experience' },
    { name: 'skillset', value: 'skillset' },
  ];
}
