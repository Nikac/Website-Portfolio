import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  user: object = {};

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
  	this.user;
  	console.log(this.user);
  	this.user = {};
  }

}
