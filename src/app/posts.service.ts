import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from './posts';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Posts[]>('http://localhost/list.php');
  }
  deletePost(id:number) {
    //console.log(id);
    return this.http.delete('http://localhost/delete.php?id=' + id, httpOptions);
  }

  createPost(post: Posts) {
    console.log(post);
    return this.http.post('http://localhost/insert.php', post);
  }

  getPostById(id: number) {
    return this.http.get<Posts[]>('http://localhost/getPostById.php?id=' + id, httpOptions);
  }

  updatePost(post: Posts) {
    return this.http.put('http://localhost/update.php' + '?id=' + post.id, post);
  }

  }

