import { Component } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  student = {
    name: "habiba Alaa el-din",
    age: "23",
    phone: "01274808878",
    email: "habibaalaaeldin18@gmail.com",
    address: "smouha, Alexandria, Egypt"
  }
}