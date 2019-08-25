import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app'
import { environment } from '../environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{

  ngOnInit() {
    firebase.initializeApp(environment.firebaseConfig)
  }

}
