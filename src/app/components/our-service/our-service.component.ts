import { Component, OnInit } from '@angular/core';
import { OurService } from '../../services/our.service';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.scss']
})
export class OurServiceComponent implements OnInit {
  ourServices = [];

  constructor(private ourService: OurService) { }

  ngOnInit() {
  	this.ourServices = this.ourService.getAllServices();
  }

}
