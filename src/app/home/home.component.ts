import { Component, OnInit } from '@angular/core';
import { AuthService } from '../access/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  public logout(): void {
    this.auth.logout();
  }

}
