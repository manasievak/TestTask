import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';
import { Posts } from '../posts';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private _postService: PostsService, private router: Router) { }
  addForm!: FormGroup;
  @Input() user!: User;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      text: ['', Validators.required],
      user_id: [1]
    });
  }

  onSubmit() {
    console.log(this.addForm.value);
    this._postService.createPost(this.addForm.value)
    .subscribe(data => {
      // this.router.navigate(['view']);
      window.location.reload();
    })
  }



}
