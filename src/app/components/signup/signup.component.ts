import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterOutlet,RouterModule,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
profileform:FormGroup;

constructor(private fb:FormBuilder){
  this.profileform=this.fb.group({
    Name:["",[Validators.required]],
    Email:["",[Validators.required,Validators.email]],
    Password:["",[Validators.required,Validators.minLength(6)]],
    RepeatPassword:["",Validators.required],
    Role:["",Validators.required],
    IsDone:[false,Validators.required]
  });
}


}
