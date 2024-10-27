import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TaskmanagerService } from '../../taskmanager.service';
import { CommonModule } from '@angular/common';
import { UsermanagerService } from '../usermanager.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [HomeComponent,RouterOutlet,RouterModule,CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  users:any[]=[]
  constructor(private userservice:UsermanagerService){

  }
  ngOnInit(): void {
    this.lordusers()
  }
  ondelete(id:number){
     this.userservice.deleteuser(id).subscribe(dara=>{
      this.lordusers()
     })
  }
  lordusers(){
    this.userservice.getUsers().subscribe(data=>{
      this.users=data
    })
  }
  
}
