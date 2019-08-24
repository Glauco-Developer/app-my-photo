import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  @Output() public showPanel: EventEmitter<string> = new EventEmitter<string>();

  public signupForm = this.fb.group({
    email: ['', Validators.required, Validators.email],
    fullname: ['', Validators.required, Validators.minLength(5)],
    username: ['', Validators.required, Validators.minLength(5)],
    password: ['', Validators.required, Validators.minLength(5)]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {console.log(this.signupForm)
  }

  public showSignInForm(): void {
    this.showPanel.emit('login');
  }
  
  public signupUser(): void {
    console.log(this.signupForm)
  } 


}
