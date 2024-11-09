import { Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { HomeComponent } from './components/home/home.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { BlanklayoutComponent } from './components/blanklayout/blanklayout.component';

export const routes: Routes = [

      {
        path:'',
        component:BlanklayoutComponent,
        children:
        [
            {path:'signup',component:SignupComponent},
            {path:'',component:SigninComponent}
        ]

      },
      {
        path:'Admin',
        component:HomeComponent,
        children:
        [
            { path: 'toUser', component: UserListComponent },

            { path: 'toTask', component: TaskListComponent },
            { path: 'add', component: TaskAddComponent },
            { path: 'addUser', component: UserAddComponent },
        
            { path: 'edit/:id', component: TaskEditComponent },
            {path:'useredit/:id',component:UserEditComponent},
        ]

      },



 
   



];
