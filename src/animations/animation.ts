import { trigger, style, animate, transition } from '@angular/animations';

const SMOOTH_CONTAINER = trigger('smoothContainer', [
  transition(
    '* <=> *',
    [style({ height: '{{height}}' }), animate('150ms ease-out')],
    { params: { height: 0 } },
  ),
]);

export const Animation = {
  SMOOTH_CONTAINER,
};
