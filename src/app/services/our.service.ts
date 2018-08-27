import { Injectable } from '@angular/core';

@Injectable()
export class OurService {
  ourServices = [
  	{ imgPath: '/assets/img/lab-icon.png', title: 'CREATIVE LAB', description: 'lab image', text: 'Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.', 
  		weDo: [
	      { name: 'Graphic Designing' },
	  	  { name: 'User Interface' },
	  	  { name: 'Icon' }
	  	], 
	  	other: [
		  	{ name: 'Illustartions' },
		  	{ name: 'Branding' },
		  	{ name: 'Photography' }
	  	] 
	  },
	  	{ imgPath: '/assets/img/engine-icon.png', title: 'WEB & APP DEVELOPMENT', description: 'engine image', text: 'Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.',
	  	 weDo: [
	  	 	{ name: 'IOS' },
	  		{ name: 'Word Press' },
	  		{ name: 'Front-End Development' }
	  	],
	  	other: [
	  		{ name: 'Android' },
	  		{ name: 'Drupal' }
	  	] 
	  },
  	{ imgPath: '/assets/img/marketing.png', title: 'ONLINE MARKETING', description: 'marketing image', text: 'Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.', 
  		 weDo: [
	  	 	{ name: 'SEO' },
	  		{ name: 'Social Media' },
	  		{ name: 'Infographics' }
	  	],
	  	other: [
	  		{ name: 'Branding' },
	  		{ name: 'Advertisments' }
	  	] 
    }
  ];



  constructor() { }

  getAllServices() {
  	return this.ourServices;
  }
}
