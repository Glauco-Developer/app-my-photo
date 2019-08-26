import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DatabaseService } from '../../database.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.sass']
})
export class AddPostComponent implements OnInit {

  public email: string;
  private image: any;

  public formNewPost: FormGroup = new FormGroup({
    'title': new FormControl(null)
  })

  constructor(private db: DatabaseService) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      this.email = user.email;
    })
  }

  public newPost(): void {
    this.db.addPost({
      email: this.email,
      title: this.formNewPost.value.title,
      image: this.image[0]
    });
  }

  public prepareImageUpload(event: Event): void{
    this.image = (<HTMLInputElement>event.target).files;
  }

}
