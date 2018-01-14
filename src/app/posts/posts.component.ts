import { AlbumSearchService } from '../album-search.service';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  constructor(private service: AlbumSearchService) {}
  posts: any;


  ngOnInit() {
  	this.service.getPosts()
    .subscribe( data => {
    	this.posts = data;
    	console.log(this.posts);
    });
  }


  createPost(input) {
  	let post = {title: input.value};
  	input.value="";
  	this.service.createPost(post)
  		.subscribe(response => {
  			// post.id = response.id;
  			console.log(response)
  			this.posts.unshift(post);
  		});
  }

  updatePost(post) {
  	this.service.updatePost(post)
  		.subscribe( response => {
  			console.log(response);
  		})
  }

  deletePost(post) {
  	this.service.deletePost(post)
  		.subscribe(response => {
  			console.log(response);
  			let index = this.posts.indexOf(post);
  			this.posts.splice(index, 1);
  		})
  }


}
