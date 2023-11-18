import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, NgForm, Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: UntypedFormGroup;
  constructor(private _formBuilder:UntypedFormBuilder ){
    this.loginForm = this._formBuilder.group({
      email_name: ['', Validators.required],
      pass_word: ['', Validators.required]
  });
  }

  ngOnInit(): void{
  
  }
  onSumbit(){
     console.log(this.loginForm)
  }

}
