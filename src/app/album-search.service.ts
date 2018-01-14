import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AlbumSearchService {
	private url = 'https://jsonplaceholder.typicode.com/posts';
	post: any;

  constructor(private http: HttpClient) { }

  getPosts() {
  	return this.http.get(this.url);
  }

  createPost(post){
  	return this.http.post(this.url,post);
  }

  updatePost(post) {
  	return this.http.put(this.url + '/' + post.id, post);
  }

  deletePost(post) {
  	return this.http.delete(this.url + '/' + post.id);
  }

}
