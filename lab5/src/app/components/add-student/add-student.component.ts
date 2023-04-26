import { Component, ViewChild} from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class StudentAddComponent {
  @ViewChild('name') inputname: any;
  @ViewChild('age') inputage: any;
  @ViewChild('email') inputemail: any;
  @ViewChild('phone') inputphone: any;

  isAdded: boolean = false;
  constructor(private myService: StudentsService) {}
  validationForm = new FormGroup({
    name:new FormControl(null,Validators.minLength(3)),
    age: new FormControl(null, [Validators.min(20), Validators.max(40)]),
    email: new FormControl(null,Validators.email)
  })

  get AgeValid(){
    return this.validationForm.controls["age"].valid;
  }
  get NameValid(){
    return this.validationForm.controls["name"].valid ;
  }
  get EmailValid(){
    return this.validationForm.controls["email"].valid;
  }
  hasNameValue() {
    return this.validationForm.controls["name"].value;
  }

  Add(name: any, age: any, email: any, phone: any) {
    let newStudent = { name,age,email, phone};
    this.myService.AddNewStudent(newStudent).subscribe();
    this.isAdded = true;
  }

  reset() {
    this.inputname.nativeElement.value = '';
    this.inputage.nativeElement.value = '';
    this.inputemail.nativeElement.value = '';
    this.inputphone.nativeElement.value = '';
  }
}