import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.sass'],
  animations: [
    trigger('banner', [
      state('created', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => created', [
        style({
          opacity: 0,
          transform: 'translateX(-50px)'
        }),
        animate('1s 1s ease-in-out')
      ])
    ]),
    trigger('form', [
      state('created', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => created', [
        style({
          opacity: 0,
          transform: 'translateX(50px)'
        }),
        animate('1s 1s ease-in-out')
      ])
    ])
  ]
})

export class AccessComponent implements OnInit {

  public stateBanner: string = 'created';
  public stateForm: string = 'created';

  public register: boolean = true 

  constructor() { }

  ngOnInit() {
  }

}
