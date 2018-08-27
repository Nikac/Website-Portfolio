import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {
  categoryNames = [
   { id: 1, name: 'Categories' },
   { id: 2, name: 'Title' },
   { id: 3, name: 'Date' }
  ];

  byTheArchive = [
  	{ id: 1, name: 'Archives' },
  	{ id: 2, name: 'Some' },
  	{ id: 3, name: 'Other' }
  ];

  blogs = [
   { imgPath: '/assets/img/girl-sec.png', title: 'Outstanding and Detailed Illustrations', date: 'Oct 10th, 2012', category: '(Sample Title)', comments: ['one', 'two', 'three'], description: 'Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.' },
   { imgPath: '/assets/img/duplex.png', title: 'Duplex Creative Response Theme', date: 'Oct 10th, 2012', category: '(Sample Title)', comments: ['one', 'two', 'three'], description: 'Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.' },
   { imgPath: '/assets/img/sydney.png', title: 'Photography Tips & Techniques', date: 'Oct 10th, 2012', category: '(Sample Title)', comments: ['one', 'two', 'three'], description: 'Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.' },
   { imgPath: '/assets/img/doctors.png', title: 'illumine Health Clinc and Health Care Theme', date: 'Oct 10th, 2012', category: '(Sample Title)', comments: ['one', 'two', 'three'], description: 'Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.' }
  ];

  constructor() { }

  getAllCategories() {
  	return this.categoryNames;
  }

  getAllArchives() {
  	return this.byTheArchive;
  }

  getAllBlogs() {
  	return this.blogs;
  }
}
