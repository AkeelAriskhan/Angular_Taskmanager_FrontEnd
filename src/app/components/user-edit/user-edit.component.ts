import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { TaskmanagerService } from '../../taskmanager.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { UsermanagerService } from '../usermanager.service';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet,ReactiveFormsModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent implements OnInit {
  profileForm1: FormGroup;
  taskid: number;

  constructor(private route: ActivatedRoute, private userservice: UsermanagerService, private ab: FormBuilder, private router: Router, private tostarservise: ToastrService) {
    this.profileForm1 = this.ab.group({
   
      name: [''],
      email: [''],
      password: [''],
      phone:[''],
      address:this.ab.group({
        id:[''],
        firstLane:[''],
        secondLane:[''],
        city:['']
      })

    })
    let id = this.route.snapshot.paramMap.get('id');
    this.taskid = Number(id)
    console.log(this.taskid)
  
  }
  ngOnInit(): void {
    this.userservice.getuser(this.taskid).subscribe(data=>{
      this.profileForm1.patchValue(data)
    })
  }
  onSubmit(){
    let user=this.profileForm1.value
    user.id=this.taskid
    this.userservice.updateuser(user).subscribe(data=>{
      this.tostarservise.success("taskupdateed");
      this.router.navigate(['/Admin/toUser'])
      
    })
  }
}
