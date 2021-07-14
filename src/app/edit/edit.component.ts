import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';
import { Posts } from '../posts';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private _postService: PostsService, 
    private router: Router, private routes: ActivatedRoute) { }
  addForm!: FormGroup;

  ngOnInit(): void {
    const routeParams = this.routes.snapshot.params;

    console.log(routeParams);

    this.addForm = this.formBuilder.group({
      text: ['', Validators.required]
    });
  }
  update() {
    // this._postService.createPost(this.addForm.value)
    // .subscribe(data => {
    //   this.router.navigate(['view']);
    // })
    console.log("Update");
  }

}
