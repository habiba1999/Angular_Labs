import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  Students=[
    {name:"habiba Alaa",age:"23"},
    {name:"Aya Alaa",age:"16"},
    {name:"Khadiga Alaa",age:"17"}
  ];
}