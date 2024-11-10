import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SingupService } from '../../singup.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule ,RouterModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  profileform:FormGroup

  constructor(private fb:FormBuilder,private singupservise:SingupService,private toastar:ToastrService,private router:Router){

    this.profileform=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required],
      IsDone:[false,Validators.required]
    })
  }

  onSubmit(){
    let user=this.profileform.value;
    const lohinuser={
      email:user.email,
      password:user.password
    }
    this.singupservise.singnin(lohinuser).subscribe({
      next:(data:any) => {
        console.log(data)
        localStorage.setItem("token",data.token);
       this.router.navigate(['/Admin/toUser'])

       alert("logedin");
        
      },complete:()=>{
        this.toastar.success("Login Success")
      },error:(error:any)=>{
        this.toastar.warning(error.error)
        alert('hi')
     
      }
    })
  }
  

}
