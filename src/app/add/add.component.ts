import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';
import { Posts } from '../posts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private _postService: PostsService, private router: Router) { }
  addForm!: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      text: ['', Validators.required]
    });
  }

  onSubmit() {
    this._postService.createPost(this.addForm.value)
    .subscribe(data => {
      // this.router.navigate(['view']);
      window.location.reload();
    })
  }



}
