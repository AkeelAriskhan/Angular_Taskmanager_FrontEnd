import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { TaskmanagerService } from '../../taskmanager.service';
import { ToastrService } from 'ngx-toastr';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule,BsDatepickerModule],
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.css'
})
export class TaskEditComponent implements OnInit {

  profileForm1: FormGroup;
  taskid: number;
  items!: FormArray;

  constructor(private route: ActivatedRoute, private taskservice: TaskmanagerService, private ab: FormBuilder, private router: Router, private tostarservise: ToastrService) {
    this.profileForm1 = this.ab.group({
      title: ['', [Validators.required]],
      description: [''],
      duedate: [''],
      priority: [''],
      userId:[''],
      cheaklists:this.ab.array([])

    })
    let id = this.route.snapshot.paramMap.get('id');
    this.taskid = Number(id)
    console.log(this.profileForm1);
    

  }

  get cheaklistss(): FormArray {
    return this.profileForm1.get('cheaklists') as FormArray
  }


  ngOnInit(): void {
    this.taskservice.gettask(this.taskid).subscribe(data => {
      data.duedate = new Date(data.duedate).toISOString().slice(0, 10);
      console.log(data);
      
      data.duedate = new Date(data.duedate).toDateString()
      this.profileForm1.patchValue(data)

      data.cheakLists.forEach(check => {
        const group = this.ab.group(check);
        this.cheaklistss.push(group);
      })

    })
    
  }
  onSubmit() {
    let task = this.profileForm1.value
    task.id = this.taskid
    console.log(task);
    
    this.taskservice.updatetask(task).subscribe(data => {
      this.tostarservise.success("taskupdateed")
      this.router.navigate(['/toTask'])
    })

  }
  createItem(): FormGroup {
    return this.ab.group({
      id:[''],
      name:[''],
      isDone:[false]
    });
  }

  addCheckList() {
    this.items = this.profileForm1.get('cheaklists') as FormArray;
    this.items.push(this.createItem());
  }
  
  removCeheckList(index: number) {
    this.cheaklistss.removeAt(index);
  }

}

