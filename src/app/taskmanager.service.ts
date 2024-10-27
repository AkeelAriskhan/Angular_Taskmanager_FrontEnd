import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './components/usermanager.service';

@Injectable({
  providedIn: 'root'
})
export class TaskmanagerService {

  constructor(private http:HttpClient) { }

  getTasks(){
    return this.http.get<any[]>('http://localhost:5197/api/TaskItems');
  }
  createtask(task:any){
    return this.http.post<any[]>('http://localhost:5197/api/TaskItems',task);
  }
  deletetask(taskID:Number){
    return this.http.delete<any[]>('http://localhost:5197/api/TaskItems/'+taskID);

  }
  updatetask(task:Task){
    return this.http.put<any[]>('http://localhost:5197/api/TaskItems/'+task.id,task);
    
  }
  gettask(taskID:Number){
    return this.http.get<Task>('http://localhost:5197/api/TaskItems/'+taskID);
    
  }
 
}
export interface Task{
  id:number;
  title:string;
  description:string;
  duedate:string;
  priority :string;
  user:User
}

