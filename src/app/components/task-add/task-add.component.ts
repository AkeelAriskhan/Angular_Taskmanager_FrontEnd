import { CommonModule } from '@angular/common';
import { Comment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskmanagerService } from '../../taskmanager.service';
import { Router } from '@angular/router';
import { User, UsermanagerService } from '../usermanager.service';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,BsDatepickerModule,TooltipModule],
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css'
})
export class TaskAddComponent implements OnInit{

  profileForm:FormGroup;
  Users:User[]=[];
  items!: FormArray;
  
  constructor(private fb:FormBuilder,private taskservice:TaskmanagerService,private userservice:UsermanagerService, private router :Router){
    this.profileForm = this.fb.group({
      title:['',[Validators.required]],
      description:[''],
      duedate:[''],
      priority:[''],
      userId:[''],
      cheaklists:this.fb.array([])
    })
  }
  
  ngOnInit(): void {
    this.userservice.getUsers().subscribe(data=>{
      this.Users = data
    })};


  onSubmit(){
    let task=this.profileForm.value
    console.log(task);
    this.taskservice.createtask(task).subscribe(data=>{
    this.router.navigate(['/toTask'])
    })

  }

  get checkList() {
    return this.profileForm.get('cheaklists') as FormArray;
  }

  addCheckList() {
    this.items = this.profileForm.get('cheaklists') as FormArray;
    this.items.push(this.createItem());
  }
  
  removCeheckList(index: number) {
    this.checkList.removeAt(index);
  }

  createItem(): FormGroup {
    return this.fb.group({
      name:[''],
      isDone:[false]
    });
  }
}
