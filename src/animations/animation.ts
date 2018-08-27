import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

const NAVIGATION_ICON = trigger('navigationIcon', [
  state(
    '1',
    style({
      width: '60px',
      height: '60px',
      'border-radius': '100%',
      cursor: 'pointer',
    }),
  ),
  state('0', style({})),
  transition('1 <=> 0', animate('150ms ease-out')),
]);

const SMOOTH_CONTAINER = trigger('smoothContainer', [
  transition('* <=> *', [style({ height: '*' }), animate('150ms ease-out')]),
]);

export const Animation = {
  NAVIGATION_ICON,
  SMOOTH_CONTAINER,
};
