import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from '../user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  @Output() public showPanel: EventEmitter<string> = new EventEmitter<string>();

  public signupForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    fullname: ['', [Validators.required, Validators.minLength(4)]],
    username: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  });

  constructor(private auth: AuthService, private fb: FormBuilder) { }

  ngOnInit() {
  }

  public showSignInForm(): void {
    this.showPanel.emit('login');
  }
  
  public signupUser(): void {
    let user: User = new User(
      this.signupForm.value.email,
      this.signupForm.value.fullname,
      this.signupForm.value.username,
      this.signupForm.value.password
    )

    this.auth.registerUser(user)
      .then(() => { this.showSignInForm() })
  }

}
