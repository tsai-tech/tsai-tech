import { trigger, transition, style, query, group, animate, animateChild, state } from '@angular/animations';
import { scaleBand } from 'd3';

const ANIMATE = '600ms ease-out';
const TRANSLATE_Z = '5em';

export const layoutAnimations = [
  trigger('enterAnimation', [
    transition('hidden => visible', [
    ])
  ]),
  trigger('routeAnimations', [

    transition('ForwardPage => RightPage', [
      query(':leave', style({ transform: `rotateY(0deg) translateZ(${TRANSLATE_Z})` })),
      query(':enter', style({ transform: `rotateY(90deg) translateZ(${TRANSLATE_Z})` })),
      query(':leave', animateChild()),
      group([
        query(':leave', animate(ANIMATE, style({ transform: `rotateY(-90deg) translateZ(${TRANSLATE_Z})` }))),
        query(':enter', animate(ANIMATE, style({ zIndex: 1, transform: `rotateY(0deg) translateZ(${TRANSLATE_Z})` })))
      ]),
      query(':enter', animateChild()),
    ]),

    transition('RightPage => ForwardPage', [
      query(':leave', style({ transform: `rotateY(0deg) translateZ(${TRANSLATE_Z})` })),
      query(':enter', style({ transform: `rotateY(-90deg) translateZ(${TRANSLATE_Z})` })),
      query(':leave', animateChild()),
      group([
        query(':leave', animate(ANIMATE, style({ transform: `rotateY(90deg) translateZ(${TRANSLATE_Z})` }))),
        query(':enter', animate(ANIMATE, style({ zIndex: 1, transform: `rotateY(0deg) translateZ(${TRANSLATE_Z})` })))
      ]),
      query(':enter', animateChild()),
    ]),

    transition('ForwardPage => LeftPage', [
      query(':leave', style({ transform: `rotateY(0deg) translateZ(${TRANSLATE_Z})` })),
      query(':enter', style({ transform: `rotateY(-90deg) translateZ(${TRANSLATE_Z})` })),
      query(':leave', animateChild()),
      group([
        query(':leave', animate(ANIMATE, style({ transform: `rotateY(90deg) translateZ(${TRANSLATE_Z})` }))),
        query(':enter', animate(ANIMATE, style({ zIndex: 1, transform: `rotateY(0deg) translateZ(${TRANSLATE_Z})` })))
      ]),
      query(':enter', animateChild()),
    ]),

    transition('LeftPage => ForwardPage', [
      query(':leave', style({ transform: `rotateY(0deg) translateZ(${TRANSLATE_Z})` })),
      query(':enter', style({ transform: `rotateY(90deg) translateZ(${TRANSLATE_Z})` })),
      query(':leave', animateChild()),
      group([
        query(':leave', animate(ANIMATE, style({ transform: `rotateY(-90deg) translateZ(${TRANSLATE_Z})` }))),
        query(':enter', animate(ANIMATE, style({ zIndex: 1, transform: `rotateY(0deg) translateZ(${TRANSLATE_Z})` })))
      ]),
      query(':enter', animateChild()),
    ]),
  ])
];

