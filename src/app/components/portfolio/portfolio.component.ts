import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  categories = [];
  portfolios = [];
  clients = [];

  constructor(private portfolio: PortfolioService) { }

  ngOnInit() {
  	this.categories = this.portfolio.getCategories();
  	this.portfolios = this.portfolio.getPortfolio();
    this.clients = this.portfolio.getClients();
  }

}
