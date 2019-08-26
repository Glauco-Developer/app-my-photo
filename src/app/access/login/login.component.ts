import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  @Output() public showPanel: EventEmitter<string> = new EventEmitter<string>();
  public errorMsg: string;

  constructor(private auth: AuthService, private fb: FormBuilder) { }

  public signinForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  ngOnInit() {
  }

  public showSignupForm(): void {
    this.showPanel.emit('register')
  }

  public loginUser(): void {
    this.auth.authUser(this.signinForm.value.email, this.signinForm.value.password)
      .then(() => {
        if(this.auth.error !== undefined) {
          this.errorMsg = this.auth.error.message
        }
      })
  }

}
