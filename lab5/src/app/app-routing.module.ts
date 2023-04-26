import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentAddComponent } from './components/add-student/add-student.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentupdateComponent } from './components/studentupdate/studentupdate.component';

const routes: Routes=[
    { path: '', component: StudentsComponent },
  { path: 'students', component: StudentsComponent },
    {path:'studentadd',component:StudentAddComponent},
    { path: 'students/:id', component: StudentDetailsComponent },
    { path: 'students/students/:id', component: StudentDetailsComponent },
    { path: "studentUpdate/:id" , component: StudentupdateComponent},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}