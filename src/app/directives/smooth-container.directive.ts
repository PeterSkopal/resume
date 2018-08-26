import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[smoothContainer]',
})
export class SmoothContainerDirective {

  @HostBinding('@smoothContainer')
  get change() {
    return {};
  }
}
