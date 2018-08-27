import { Injectable } from '@angular/core';

@Injectable()
export class PortfolioService {
  categories = [
    { category: 'All Works' },
  	{ category: 'Web Designing' },
  	{ category: 'Identity' },
  	{ category: 'Print' },
  	{ category: 'Photography' },
  	{ category: 'Motion' }
  ];

  portfolio = [
  	{ category: ['All Works'], imgPath: '/assets/img/scooter.png' },
  	{ category: ['All Works'], imgPath: '/assets/img/girl.png' },
  	{ category: ['All Works'], imgPath: '/assets/img/fifty.png' },
  	{ category: ['All Works'], imgPath: '/assets/img/maple.png' },
  	{ category: ['All Works'], imgPath: '/assets/img/bird.png' },
  	{ category: ['All Works'], imgPath: '/assets/img/red.png' },
  	{ category: ['All Works'], imgPath: '/assets/img/robocap.png' },
  	{ category: ['All Works'], imgPath: '/assets/img/space.png' }
  ];

  clients = [
    { imagePath: '/assets/img/billford.png', description: 'billford image' },
    { imagePath: '/assets/img/automotive.png',  description: 'automotive image'},
    { imagePath: '/assets/img/yardsale.png', description: 'yardsale image' },
    { imagePath: '/assets/img/px.png', description: 'px outline image'},
    { imagePath: '/assets/img/diglife.png', description: 'diglife image '},
  ];

  constructor() { }

  getCategories(): any {
  	return this.categories;
  }

  getPortfolio() {
  	return this.portfolio;
  }

  getClients() {
    return this.clients;
  }
}
