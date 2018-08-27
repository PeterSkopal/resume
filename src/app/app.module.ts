import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypingAnimationDirective } from 'angular-typing-animation';

import { AppComponent } from './app.component';
import { FooterFixedNavItemComponent } from './layouts/footer-fixed/footer-fixed-nav-item/footer-fixed-nav-item.component';
import { FooterFixedComponent } from './layouts/footer-fixed/footer-fixed/footer-fixed.component';
import { FooterNavIconComponent } from './layouts/footer-fixed/footer-nav-icon/footer-nav-icon.component';
import { LandingPageComponent } from './layouts/landing-page/landing-page/landing-page.component';

import { SmoothContainerDirective } from './directives/smooth-container/smooth-container.directive';

const COMPONENTS = [
  AppComponent,
  FooterFixedComponent,
  FooterNavIconComponent,
  FooterFixedNavItemComponent,
  LandingPageComponent,
];

const DIRECTIVES = [TypingAnimationDirective, SmoothContainerDirective];

const IMPORTS = [BrowserModule, BrowserAnimationsModule];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  imports: [...IMPORTS],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
