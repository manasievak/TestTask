import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';
import { Posts } from '../posts';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Timestamp } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private _postService: PostsService, 
    private router: Router, private routes: ActivatedRoute) { }
  addForm!: FormGroup;

  @Input() id!: number;
  @Input() date!: number;

  ngOnInit(): void {
    // const routeParams = this.routes.snapshot.params;

    // console.log(this.id);
    // console.log(this.date);

    this._postService.getPostById(this.id)
    .subscribe((data: any) => {
      // console.log(data);
      this.addForm.patchValue(data);
    });

    this.addForm = this.formBuilder.group({
      id: [''],
      text: ['', Validators.required]
    });
  }
  update() {
    // console.log(this.addForm.value);
    this._postService.updatePost(this.addForm.value).subscribe(() => {
      window.location.reload();
    });
  }

  delete():void {
    //console.log(post);
    this._postService.deletePost(this.id!)
    .subscribe();
    window.location.reload();
  }
  

}
