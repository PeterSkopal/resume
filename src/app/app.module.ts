import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterFixedComponent } from './layouts/footer-fixed/footer-fixed.component';
import { FooterFixedNavItemComponent } from './layouts/footer-fixed/footer-fixed-nav-item/footer-fixed-nav-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterFixedComponent,
    FooterFixedNavItemComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
