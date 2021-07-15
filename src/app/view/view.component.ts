import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Posts } from '../posts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  posts!: Posts[];
  // id!: number;

  constructor(private _postService: PostsService, private router: Router) { }

  ngOnInit() {
    this._postService.getPosts()
      .subscribe((data: Posts[]) => {
        this.posts=data;
        // console.log(this.posts);
      });
  }

  delete(post: Posts):void {
    //console.log(post);
    this._postService.deletePost(post.id!)
    .subscribe();
  }

  edit(id: number) {
    // this.id = post.id!;
    this.router.navigate(['edit/' + id]);
  }
  add() {
    // this.id = post.id!;
    this.router.navigate(['add']);
  }

}
