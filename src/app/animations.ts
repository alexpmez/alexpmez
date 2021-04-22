import { trigger, state, transition, style, animate, animation, keyframes, useAnimation } from '@angular/animations';

//////////////// Fade //////////////////
export let fadeInAnimation = animation([
  style({ opacity: 0 }),
  animate('{{ duration }} {{ easing }}')
], {
  params: {
    duraton: '100ms',
    easing: 'ease-in'
  }
});

export let fadeOutAnimation = animation([
  style({ opacity: 1 }),
    animate('{{ duration }} {{ easing }}')
  ], {
    params: {
      duraton: '100ms',
      easing: 'ease-out'
    }
  });

export let fade = trigger('fade', [
  transition(':enter',[
    useAnimation(fadeInAnimation)
  ]),

  transition(':leave',[
    useAnimation(fadeOutAnimation)
  ])
]);
//////////////// End Fade //////////////////