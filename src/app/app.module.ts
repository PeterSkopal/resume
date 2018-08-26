import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { TypingAnimationDirective } from 'angular-typing-animation';

import { AppComponent } from './app.component';
import { FooterFixedComponent } from './layouts/footer-fixed/footer-fixed/footer-fixed.component';
import { FooterFixedNavItemComponent } from './layouts/footer-fixed/footer-fixed-nav-item/footer-fixed-nav-item.component';
import { LandingPageComponent } from './layouts/landing-page/landing-page/landing-page.component';

const COMPONENTS = [
  AppComponent,
  FooterFixedComponent,
  FooterFixedNavItemComponent,
  LandingPageComponent,
  TypingAnimationDirective,
];

const IMPORTS = [BrowserModule, BrowserAnimationsModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...IMPORTS],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
