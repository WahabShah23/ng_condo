import { animate, keyframes, state, style, transition, trigger } from "@angular/animations";

export const toggleSearchAnimation = [
    trigger('slideRightLeft', [
        state('show', style({
            transform: 'translateX(0)',
            // opacity: 1,
            // display: 'inline-block'
            width: '200px'
        })),
        state('hide', style({
            transform: 'translateX(0)',
            // opacity: 0,
            // display: 'none'
            width: '0px'
        })),
        transition('show => hide', animate('400ms ease-out')),
        transition('hide => show', animate('400ms ease-in'))
    ]),
];

export const flyin = [
    trigger('flyin', [
        state('in', style({ transform: 'translateX(0)' })),
        transition('void => *', [
            style({ transform: 'translateX(-100%)' }),
            animate('700ms ease-in')
        ])
    ])
];

export const rotateIn = [
    trigger('rotateIn', [
        state('in', style({ transform: 'translateX(0)' })),
        transition('void => *', [
            style({ transform: 'rotate(-180deg)' }),
            animate('700ms ease-out')
        ])
    ])
];

export const flyFromBottom = [
    trigger('flyFromBottom', [
        state('in', style({ transform: 'translateY(0)' })),
        transition('void => *', [
            style({ transform: 'translateY(100%)' }),
            animate('700ms ease-in')
        ])
    ])
];

export const flyItems = [
    trigger('flyItems', [
        state('in', style({ transform: 'translateX(0)' })),
        transition('void => *', [
            animate(700, keyframes([
                style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
            ]))
        ]),
        transition('* => void', [
            animate(500, keyframes([
                style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
            ]))
        ])
    ])
];

