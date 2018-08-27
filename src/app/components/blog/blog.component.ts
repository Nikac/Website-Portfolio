import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  categories = [];
  archives = [];
  blogs = [];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
  	this.categories = this.blogService.getAllCategories();
  	this.archives = this.blogService.getAllArchives();
  	this.blogs = this.blogService.getAllBlogs();
  }

}
