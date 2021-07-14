import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Posts } from '../posts';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  posts!: Posts[];

  constructor(private _postService: PostsService) { }

  ngOnInit() {
    this._postService.getPosts()
      .subscribe((data: Posts[]) => {
        this.posts=data;
        console.log(this.posts);
      });
  }

  delete(post: Posts):void {
    //console.log(post);
    this._postService.deletePost(post.id!)
    .subscribe();
  }

}
