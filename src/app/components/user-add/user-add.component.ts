import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsermanagerService } from '../usermanager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css'
})
export class UserAddComponent {

  profileForm:FormGroup;
  constructor(private fb:FormBuilder,private userservice:UsermanagerService, private router :Router){
    this.profileForm=this.fb.group({
      name:['',[Validators.required]],
      email:[''],
      password:[''],
      phone:[''],
      address:this.fb.group({
        firstLane:[''],
        secondLane:[''],
        city:['']
      })
      

      

    })
  };
  onSubmit(){
    let user=this.profileForm.value
    console.log(user);
    
       this.userservice.createuser(user).subscribe(data=>{
        this.router.navigate(['/toUser'])
       })
  }
}
