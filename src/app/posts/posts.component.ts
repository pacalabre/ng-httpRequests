import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  constructor(private http: HttpClient ) {}
  	posts;
  	private url = 'https://jsonplaceholder.typicode.com/posts';
    ngOnInit() {
    this.http.get(this.url)
    	.subscribe( data => {
    		this.posts = data;
    		console.log(this.posts);
    	});
  }

  createPost(input) {
  	let post = {title: input.value};
  	input.value="";
  	this.http.post(this.url, post)
  		.subscribe(response => {
  			// post.id = response.id;
  			console.log(response)
  			this.posts.unshift(post);
  		});
  }


}
