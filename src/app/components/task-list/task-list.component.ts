import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterModule, RouterOutlet } from '@angular/router';
import { TaskmanagerService } from '../../taskmanager.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterModule,HomeComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {

  title = 'TaskManager';
  tasks:any[]=[]
  
  constructor(private taskService:TaskmanagerService, private router:Router){

  }
  ngOnInit(): void {
    this.loadtasks();
  }

  ondelete(id:number){
     this.taskService.deletetask(id).subscribe(data =>{   
      this.loadtasks();
     })
  }

  loadtasks(){
    this.taskService.getTasks().subscribe(data=>{
      this.tasks=data;
      console.log(data)
      
    })
  }

  GotoAdd(){
    // this.router.navigate(['/add'])
  }
  onedit(id:number){
    

  }
}

