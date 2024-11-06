import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { SingupService } from '../../singup.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterOutlet,RouterModule,ReactiveFormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
profileform:FormGroup;

constructor(private fb:FormBuilder,private singnupservise:SingupService,private router:Router){
  this.profileform=this.fb.group({
    Name:["",[Validators.required]],
    Email:["",[Validators.required,Validators.email]],
    Password:["",[Validators.required,Validators.minLength(6)]],
    RepeatPassword:["",Validators.required],
    Role:["",Validators.required],
    IsDone:[false,Validators.required]
  });
}

onSubmit(){
let user=this.profileform.value
const conform=this.conformPassword(user.Password,user.RepeatPassword)
if(conform ){
  const finalUser={
    fullName:user.Name,
    email:user.Email,
    password:user.Password,
    role:Number(user.Role)
  }
  this.singnupservise.Createsingnup(finalUser).subscribe(data=>{
    console.log(data);
    this.router.navigate(['/signin'])
    // this.router.navigate(['/toUser'])

    
  })
}else{
  alert("Passwords Not matching ")
}

}
conformPassword(password:any,RepeatPassword:any){
  if(password==RepeatPassword){
    return true
  }else{
    return false
  }

}


}
