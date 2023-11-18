import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, NgForm, Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm: UntypedFormGroup;

constructor(private _formBuilder: UntypedFormBuilder){

}

   ngOnInit(){
    this.signupForm = this._formBuilder.group({
      UserF_name: ['', Validators.required],
      UserL_name: ['', Validators.required],
      email: ['', Validators.required],
      pass: ['', Validators.required]
    })
   }
  onSignUp(){

  }
}
