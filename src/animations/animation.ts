import { trigger, style, animate, transition } from '@angular/animations';

const SMOOTH_CONTAINER = trigger('smoothContainer', [
  transition(
    '* <=> *',
    [style({ height: '*' }), animate('150ms ease-out')],
  ),
]);

export const Animation = {
  SMOOTH_CONTAINER,
};
