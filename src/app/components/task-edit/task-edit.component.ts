import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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

  constructor(private route: ActivatedRoute, private taskservice: TaskmanagerService, private ab: FormBuilder, private router: Router, private tostarservise: ToastrService) {
    this.profileForm1 = this.ab.group({
      title: ['', [Validators.required]],
      description: [''],
      duedate: [''],
      priority: ['']

    })
    let id = this.route.snapshot.paramMap.get('id');
    this.taskid = Number(id)

  }


  ngOnInit(): void {
    this.taskservice.gettask(this.taskid).subscribe(data => {
      data.duedate = new Date(data.duedate).toISOString().slice(0, 10);
      this.profileForm1.patchValue(data)
    })
  }
  onSubmit() {
    let task = this.profileForm1.value
    task.id = this.taskid
    this.taskservice.updatetask(task).subscribe(data => {
      this.tostarservise.success("taskupdateed")
      this.router.navigate(['/toTask'])
    })

  }

}

