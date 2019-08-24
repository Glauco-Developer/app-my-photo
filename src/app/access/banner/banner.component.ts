import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { BannerImage } from './banner-image.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.sass'],
  animations: [
    trigger('banner', [
      state('hidden', style({
        opacity: 0
      })),
      state('visible', style({
        opacity: 1
      })),
      transition('hidden => visible', animate('2s ease-in')),
      transition('visible => hidden', animate('2s ease-in'))
    ])
  ]
})
export class BannerComponent implements OnInit {

  public images: BannerImage[] = [
    {state: 'visible', path: '../../../assets/images/img_1.png'},
    {state: 'hidden', path: '../../../assets/images/img_2.png'},
    {state: 'hidden', path: '../../../assets/images/img_3.png'},
    {state: 'hidden', path: '../../../assets/images/img_4.png'},
    {state: 'hidden', path: '../../../assets/images/img_5.png'},
  ]

  constructor() { }

  ngOnInit() {

	setTimeout(() => { this.changeImage() },3000)}

  public changeImage() {    
	
	let idx: number;

    for(let i: number = 0; i <= 4; i++) {
		if(this.images[i].state === 'visible') {
			this.images[i].state = 'hidden';
			idx = i === 4 ? 0 : i+1;
        	break;
		}		  
	}	

	this.images[idx].state = 'visible';
	setTimeout(() => { this.changeImage() },3000)
  }

}
