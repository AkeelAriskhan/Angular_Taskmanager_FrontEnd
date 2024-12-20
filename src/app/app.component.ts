import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskmanagerService } from './taskmanager.service';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './components/task-list/task-list.component';
import { HomeComponent } from "./components/home/home.component";
import { BlanklayoutComponent } from './components/blanklayout/blanklayout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TaskListComponent, HomeComponent,BlanklayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
 
  title = 'TaskManager';


}
